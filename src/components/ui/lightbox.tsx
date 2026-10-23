"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { gsap, Flip, useGSAP } from "@/lib/gsap";

interface LightboxProps {
  src: string;
  alt: string;
  flipState?: Flip.FlipState | null;
  onClose: () => void;
}

export function Lightbox({ src, alt, flipState, onClose }: LightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const modalImageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  useGSAP(() => {
    const backdrop = containerRef.current;
    const modalTarget = modalImageContainerRef.current;
    if (!backdrop || !modalTarget) return;

    // Fade in backdrop
    gsap.fromTo(
      backdrop,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: "power2.out" }
    );

    // FLIP transition if origin state is available
    if (flipState) {
      Flip.from(flipState, {
        targets: modalTarget,
        duration: 0.6,
        ease: "power3.inOut",
        scale: true,
        absolute: false,
      });
    } else {
      gsap.fromTo(
        modalTarget,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.4)" }
      );
    }
  }, { scope: containerRef, dependencies: [flipState] });

  const handleClose = () => {
    const backdrop = containerRef.current;
    const modalTarget = modalImageContainerRef.current;

    if (backdrop && modalTarget) {
      gsap.to(backdrop, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
      gsap.to(modalTarget, {
        scale: 0.9,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClose}
      className="fixed inset-0 z-70 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
    >
      <button
        type="button"
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10 shadow-md"
        onClick={handleClose}
        aria-label="Close"
      >
        <FiX className="w-5 h-5" />
      </button>

      <div
        ref={modalImageContainerRef}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl max-h-[85vh] w-full h-auto overflow-hidden rounded-2xl shadow-2xl border border-white/10"
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
          sizes="90vw"
          priority
        />
      </div>
    </div>
  );
}
