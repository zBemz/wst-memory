"use client";

import { useEffect } from "react";

export function useScrollEffects() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        window.scrollY;

      document.documentElement.style.setProperty(
        "--scroll-y",
        `${scrolled}px`
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);
}