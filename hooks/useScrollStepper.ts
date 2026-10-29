"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseScrollStepperProps {
  totalSteps: number;
  PauseMs?: number;
  disableOnMobile?: boolean;
}

export function useScrollStepper({
  totalSteps,
  PauseMs = 520,
  disableOnMobile = false,
}: UseScrollStepperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const activeIndexRef = useRef(0);
  const isPausedRef = useRef(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const programmaticLockUntilRef = useRef<number>(0);

  const touchStartYRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const gestureSteppedRef = useRef<boolean>(false);
  const wheelAccumRef = useRef<number>(0);

  const triggerPause = useCallback(() => {
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
      wheelAccumRef.current = 0;
    }, PauseMs);
  }, [PauseMs]);

  const goToStep = useCallback(
    (nextIdx: number, mode: "auto" | "smooth" = "auto") => {
      const clamped = Math.max(0, Math.min(totalSteps - 1, nextIdx));
      if (clamped === activeIndexRef.current && mode === "auto") {
        return;
      }

      activeIndexRef.current = clamped;
      setActiveIndex(clamped);
      triggerPause();

      if (disableOnMobile && typeof window !== "undefined" && window.innerWidth < 1024) {
        return;
      }

      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const trackTop = window.scrollY + rect.top;
      const scrollableDistance = Math.max(
        0,
        track.offsetHeight - window.innerHeight
      );
      const stepOffset =
        totalSteps > 1 ? (scrollableDistance / (totalSteps - 1)) * clamped : 0;
      const targetScrollY = trackTop + stepOffset;

      const isAlreadyPinned =
        rect.top <= 4 && rect.bottom >= window.innerHeight - 4;

      programmaticLockUntilRef.current =
        performance.now() + (isAlreadyPinned && mode === "auto" ? 180 : 750);

      window.scrollTo({
        top: targetScrollY,
        behavior: isAlreadyPinned && mode === "auto" ? "instant" : "smooth",
      });
    },
    [disableOnMobile, totalSteps, triggerPause]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (disableOnMobile && window.innerWidth < 1024) return;
      if (performance.now() < programmaticLockUntilRef.current) return;

      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      if (rect.top <= 24 && rect.bottom >= window.innerHeight - 24) {
        const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
        const mappedIndex = Math.round(progress * (totalSteps - 1));
        if (mappedIndex !== activeIndexRef.current) {
          activeIndexRef.current = mappedIndex;
          setActiveIndex(mappedIndex);
          triggerPause();
        }
      } else if (rect.top > 24 && activeIndexRef.current !== 0) {
        activeIndexRef.current = 0;
        setActiveIndex(0);
      } else if (
        rect.bottom < window.innerHeight - 24 &&
        activeIndexRef.current !== totalSteps - 1
      ) {
        activeIndexRef.current = totalSteps - 1;
        setActiveIndex(totalSteps - 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [disableOnMobile, totalSteps, triggerPause]);

  useEffect(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;

    const isStagePinned = () => {
      if (disableOnMobile && window.innerWidth < 1024) return false;
      const rect = track.getBoundingClientRect();
      return rect.top <= 12 && rect.bottom >= window.innerHeight - 12;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (disableOnMobile && window.innerWidth < 1024) return;
      if (e.touches.length !== 1) return;
      touchStartYRef.current = e.touches[0].clientY;
      touchStartXRef.current = e.touches[0].clientX;
      gestureSteppedRef.current = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (disableOnMobile && window.innerWidth < 1024) return;
      if (
        touchStartYRef.current === null ||
        touchStartXRef.current === null ||
        e.touches.length !== 1
      ) {
        return;
      }

      if (!isStagePinned()) return;

      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const deltaY = touchStartYRef.current - currentY;
      const deltaX = touchStartXRef.current - currentX;

      const cur = activeIndexRef.current;

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 36) {
        if (!isPausedRef.current && !gestureSteppedRef.current) {
          if (deltaX > 0 && cur < totalSteps - 1) {
            gestureSteppedRef.current = true;
            goToStep(cur + 1, "auto");
          } else if (deltaX < 0 && cur > 0) {
            gestureSteppedRef.current = true;
            goToStep(cur - 1, "auto");
          }
        }
        return;
      }

      const goingDown = deltaY > 0;
      const goingUp = deltaY < 0;

      const canStepDown = goingDown && cur < totalSteps - 1;
      const canStepUp = goingUp && cur > 0;

      if (
        gestureSteppedRef.current ||
        isPausedRef.current ||
        canStepDown ||
        canStepUp
      ) {
        if (e.cancelable) e.preventDefault();

        if (
          !isPausedRef.current &&
          !gestureSteppedRef.current &&
          Math.abs(deltaY) > 26
        ) {
          gestureSteppedRef.current = true;
          if (canStepDown) {
            goToStep(cur + 1, "auto");
          } else if (canStepUp) {
            goToStep(cur - 1, "auto");
          }
        }
      }
    };

    const onTouchEnd = () => {
      touchStartYRef.current = null;
      touchStartXRef.current = null;
      gestureSteppedRef.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      if (disableOnMobile && window.innerWidth < 1024) return;
      if (!isStagePinned()) return;

      const cur = activeIndexRef.current;
      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      const canStepDown = goingDown && cur < totalSteps - 1;
      const canStepUp = goingUp && cur > 0;

      if (isPausedRef.current || canStepDown || canStepUp) {
        if (e.cancelable) e.preventDefault();

        if (!isPausedRef.current) {
          wheelAccumRef.current += e.deltaY;
          if (Math.abs(wheelAccumRef.current) > 28) {
            wheelAccumRef.current = 0;
            if (canStepDown) {
              goToStep(cur + 1, "auto");
            } else if (canStepUp) {
              goToStep(cur - 1, "auto");
            }
          }
        }
      }
    };

    stage.addEventListener("touchstart", onTouchStart, { passive: true });
    stage.addEventListener("touchmove", onTouchMove, { passive: false });
    stage.addEventListener("touchend", onTouchEnd, { passive: true });
    stage.addEventListener("touchcancel", onTouchEnd, { passive: true });
    stage.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      stage.removeEventListener("touchstart", onTouchStart);
      stage.removeEventListener("touchmove", onTouchMove);
      stage.removeEventListener("touchend", onTouchEnd);
      stage.removeEventListener("touchcancel", onTouchEnd);
      stage.removeEventListener("wheel", onWheel);
    };
  }, [disableOnMobile, goToStep, totalSteps]);

  return {
    activeIndex,
    goToStep,
    trackRef,
    stageRef,
  };
}
