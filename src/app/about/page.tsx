"use client";
import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Particles from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import type { ISourceOptions } from "@tsparticles/engine";

export default function About() {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadAll(tsParticles);
  }, []);

  const particlesOptions: ISourceOptions = {
    fullScreen: { enable: false }, // agar tidak fullscreen
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["bubble"],
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        bubble: {
          distance: 150,
          size: 10,
          duration: 2,
          opacity: 1,
          speed: 3,
        },
      },
    },
    particles: {
      color: { value: "#00bfff" },
      number: {
        value: 50,
        density: {
          enable: true,
          width: 150,
          height: 150,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.7,
      },
      size: {
        value: { min: 1, max: 5 },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
    },
    detectRetina: true,
  };

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <div
      id="about"
      className="flex justify-center items-center pt-30 pb-16 border-2 bg-sky-100"
    >
      <div className="grid w-9/12 grid-cols-2 gap-4">
        <div className="col-span-1 flex items-center">
          <div className="">
            <h1 className="text-sky-400 text-6xl font-bold">
              Shohibun <br /> Najam Ilma
            </h1>
            <h2 className="text-gray-500 text-3xl font-bold mt-2">
              Frontend Web Developer
            </h2>

            <p className="text-lg text-gray-600 mt-6">
              A graduate of the Informatics Study Program, Faculty of Computer
              Science, University of Jember, with a GPA of 3.74. Experienced as
              a Front End Developer Intern at PT Central AI, involved in the
              development of the company’s website using JavaScript and Python
              with frameworks such as React.js, Next.js, and Flask. Actively
              participated in student organizations as Head of the Public
              Relations Division at HMIF, and also served as a Teaching
              Assistant for the Artificial Intelligence course, enhancing
              technical communication, teamwork, and collaboration skills in
              both academic and professional settings.
            </p>

            <div className="flex justify-around mt-10">
              <div className="w-7/12">
                <a href="/Curriculum_Vitae_Shohibun_Najam_Ilma.pdf" download>
                  <Button
                    variant={"ghost"}
                    className="bg-sky-400 text-white text-xl cursor-pointer"
                  >
                    Curriculum Vitae
                  </Button>
                </a>
              </div>

              <div className="w-full">
                <a href="/Portfolio_Shohibun.pdf" download>
                  <Button
                    variant={"ghost"}
                    className="bg-sky-400 text-white text-xl cursor-pointer"
                  >
                    Portfolio
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center pb-7">
          <div className="relative w-[360px] h-[500px]">
            <Particles
              id="tsparticles"
              options={particlesOptions}
              className="absolute top-0 left-0 w-full h-full z-0 rounded-full"
            />

            <div ref={tiltRef} className="relative z-10">
              <Image
                src="/images/icon.jpg"
                alt="Shohibun Najam Ilma"
                width={350}
                height={350}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
