"use client";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, Flip);
  gsap.defaults({
    ease: "power2.out",
    duration: 0.5,
  });
}

export * from "gsap";
export { Flip, useGSAP };
