"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respetar preferencia de movimiento reducido
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Grupo principal de la escultura técnica
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Poliedro exterior facetado (Cobre pálido / vidrio esmerilado #d5b099)
    const outerGeo = new THREE.IcosahedronGeometry(1.95, 1);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0xd5b099,
      metalness: 0.3,
      roughness: 0.22,
      transmission: 0.55,
      thickness: 1.4,
      clearcoat: 0.85,
      clearcoatRoughness: 0.15,
      flatShading: true,
      transparent: true,
      opacity: 0.92,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 2. Retícula de aristas de precisión (CAD / Preprensa #faf8f5)
    const edgesGeo = new THREE.EdgesGeometry(outerGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0xfaf8f5,
      transparent: true,
      opacity: 0.22,
    });
    const wireframeLines = new THREE.LineSegments(edgesGeo, edgesMat);
    wireframeLines.scale.setScalar(1.015);
    mainGroup.add(wireframeLines);

    // 3. Núcleo octaedro terracota oscuro (#9d6a4e)
    const coreGeo = new THREE.OctahedronGeometry(0.95, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x9d6a4e,
      metalness: 0.65,
      roughness: 0.28,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 4. Anillos de calibración orbital (referencia a marcas de registro de imprenta)
    const ringGeo1 = new THREE.TorusGeometry(2.55, 0.012, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xd5b099,
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.6;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.85, 0.008, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xfaf8f5,
      transparent: true,
      opacity: 0.16,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 3.2;
    ring2.rotation.z = Math.PI / 4;
    mainGroup.add(ring2);

    // Iluminación de estudio
    const ambientLight = new THREE.AmbientLight(0xfaf8f5, 0.65);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfaf8f5, 2.1);
    keyLight.position.set(5, 6, 7);
    scene.add(keyLight);

    const copperLight = new THREE.PointLight(0xd5b099, 3.5, 18);
    copperLight.position.set(-5, -3, 4);
    scene.add(copperLight);

    const rimLight = new THREE.PointLight(0x9d6a4e, 2.4, 15);
    rimLight.position.set(2, -5, -4);
    scene.add(rimLight);

    // Ajuste de posición según viewport
    const updateLayout = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      if (w >= 1024) {
        mainGroup.position.set(2.35, 0.05, 0);
        mainGroup.scale.setScalar(1.0);
      } else if (w >= 768) {
        mainGroup.position.set(1.4, -0.2, 0);
        mainGroup.scale.setScalar(0.82);
      } else {
        mainGroup.position.set(0, -0.8, 0);
        mainGroup.scale.setScalar(0.68);
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);

    // Interacción con cursor e inercia
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      targetY = nx * 0.55;
      targetX = ny * 0.4;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // Pausa cuando sale de pantalla
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.02 }
    );
    observer.observe(container);

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      const speedFactor = prefersReducedMotion ? 0.05 : 1;

      outerMesh.rotation.y += 0.18 * delta * speedFactor;
      outerMesh.rotation.x += 0.08 * delta * speedFactor;

      wireframeLines.rotation.copy(outerMesh.rotation);

      coreMesh.rotation.y -= 0.42 * delta * speedFactor;
      coreMesh.rotation.z += 0.25 * delta * speedFactor;

      ring1.rotation.z += 0.15 * delta * speedFactor;
      ring2.rotation.y -= 0.12 * delta * speedFactor;

      // Inercia combinada con scroll
      const scrollProgress = scrollY * 0.0012;
      mainGroup.rotation.x = currentX + scrollProgress;
      mainGroup.rotation.y = currentY + scrollProgress * 0.6;
      mainGroup.position.y += Math.sin(elapsed * 1.4) * 0.0008 * speedFactor;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      outerGeo.dispose();
      outerMat.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-90"
    />
  );
}
