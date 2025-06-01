"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import VanillaTilt from "vanilla-tilt";

export default function Certificate() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const tiltRef1 = useRef<HTMLDivElement>(null);
  const tiltRef2 = useRef<HTMLDivElement>(null);
  const tiltRef3 = useRef<HTMLDivElement>(null);
  const tiltRef4 = useRef<HTMLDivElement>(null);
  const tiltRef5 = useRef<HTMLDivElement>(null);
  const tiltRef6 = useRef<HTMLDivElement>(null);
  const tiltRef7 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [
      tiltRef1,
      tiltRef2,
      tiltRef3,
      tiltRef4,
      tiltRef5,
      tiltRef6,
      tiltRef7,
    ];

    const initTilt = () => {
      refs.forEach((ref) => {
        if (ref.current && !ref.current.vanillaTilt) {
          VanillaTilt.init(ref.current, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
            scale: 1.05,
            reset: false,
          });
        }
      });
    };

    // Delay initialization to ensure elements are mounted
    const timeout = setTimeout(initTilt, 100);

    return () => {
      clearTimeout(timeout);
      refs.forEach((ref) => {
        ref.current?.vanillaTilt?.destroy?.();
      });
    };
  }, []);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return (
    <div
      id="certificate"
      className="w-full flex justify-center items-center mt-25"
    >
      <div className="w-9/12">
        <h1 className="text-sky-400 text-4xl font-bold text-center">
          Certificate
        </h1>

        <Carousel className="w-full mt-20">
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <div
                  className="w-[500px] h-auto"
                  ref={tiltRef1}
                  onClick={() => setIsOpen1(true)}
                >
                  <Image
                    src="/images/certificate.jpg"
                    alt="certificate"
                    width={500}
                    height={350}
                    className="rounded-lg cursor-pointer"
                  />
                </div>

                <Modal
                  isOpen={isOpen1}
                  onRequestClose={() => setIsOpen1(false)}
                  className="flex justify-center items-center h-full"
                  overlayClassName="fixed inset-0 bg-black/70 z-50"
                >
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen1(false)}
                      className="absolute top-2 right-5 text-black text-3xl font-bold cursor-pointer"
                    >
                      &times;
                    </button>
                    <Image
                      src="/images/certificate.jpg"
                      alt="project1"
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                  </div>
                </Modal>

                <div className="text-center mt-10">
                  <h1 className="text-2xl font-black text-sky-400">
                    Assistant Lecturer in the Geographic Information Systems
                    Laboratory
                  </h1>
                  <p className="text-gray-600 text-base font-bold">
                    2020 - 2021
                  </p>
                  <p className="text-gray-600 text-base mt-4">
                    This certificate is given as proof of experience as a
                    teaching assistant in the Geographic Information System
                    Laboratory.
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex flex-col items-center">
                <div
                  className="w-[500px] h-auto"
                  ref={tiltRef2}
                  onClick={() => setIsOpen2(true)}
                >
                  <Image
                    src="/images/certificate_2.jpg"
                    alt="certificate2"
                    width={500}
                    height={350}
                    className="rounded-lg cursor-pointer"
                  />
                </div>

                <Modal
                  isOpen={isOpen2}
                  onRequestClose={() => setIsOpen2(false)}
                  className="flex justify-center items-center h-full"
                  overlayClassName="fixed inset-0 bg-black/70 z-50"
                >
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen2(false)}
                      className="absolute top-2 right-5 text-black text-3xl font-bold cursor-pointer"
                    >
                      &times;
                    </button>
                    <Image
                      src="/images/certificate_2.jpg"
                      alt="project2"
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                  </div>
                </Modal>

                <div className="text-center mt-10">
                  <h1 className="text-2xl font-black text-sky-400">
                    Laboratory Assistant in Geographic Information System
                  </h1>
                  <p className="text-gray-600 text-base font-bold">
                    2020 - 2021
                  </p>
                  <p className="text-gray-600 text-base mt-4">
                    This certificate is granted as proof of experience as an
                    assistant in the Geographic Information System Laboratory.
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex flex-col items-center">
                <div
                  className="w-[500px] h-auto"
                  ref={tiltRef3}
                  onClick={() => setIsOpen3(true)}
                >
                  <Image
                    src="/images/certificate_3.jpg"
                    alt="certificate3"
                    width={500}
                    height={350}
                    className="rounded-lg cursor-pointer"
                  />
                </div>

                <Modal
                  isOpen={isOpen3}
                  onRequestClose={() => setIsOpen3(false)}
                  className="flex justify-center items-center h-full"
                  overlayClassName="fixed inset-0 bg-black/70 z-50"
                >
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen3(false)}
                      className="absolute top-2 right-5 text-black text-3xl font-bold cursor-pointer"
                    >
                      &times;
                    </button>
                    <Image
                      src="/images/certificate_3.jpg"
                      alt="project3"
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                  </div>
                </Modal>

                <div className="text-center mt-10">
                  <h1 className="text-2xl font-black text-sky-400">
                    Member of the Public Relations Division
                  </h1>
                  <p className="text-gray-600 text-base font-bold">
                    2019 - 2020
                  </p>
                  <p className="text-gray-600 text-base mt-4">
                    This certificate is given as proof of having served as a
                    member of the public relations division.
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex flex-col items-center">
                <div
                  className="w-[500px] h-auto"
                  ref={tiltRef4}
                  onClick={() => setIsOpen4(true)}
                >
                  <Image
                    src="/images/certificate_4.jpg"
                    alt="certificate4"
                    width={500}
                    height={350}
                    className="rounded-lg cursor-pointer"
                  />
                </div>

                <Modal
                  isOpen={isOpen4}
                  onRequestClose={() => setIsOpen4(false)}
                  className="flex justify-center items-center h-full"
                  overlayClassName="fixed inset-0 bg-black/70 z-50"
                >
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen4(false)}
                      className="absolute top-2 right-5 text-black text-3xl font-bold cursor-pointer"
                    >
                      &times;
                    </button>
                    <Image
                      src="/images/certificate_4.jpg"
                      alt="project4"
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                  </div>
                </Modal>

                <div className="text-center mt-10">
                  <h1 className="text-2xl font-black text-sky-400">
                    Member of the Public Relations Division
                  </h1>
                  <p className="text-gray-600 text-base font-bold">
                    2020 - 2021
                  </p>
                  <p className="text-gray-600 text-base mt-4">
                    This certificate is given as proof of having served as a
                    member of the public relations division.
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex flex-col items-center">
                <div
                  className="w-[500px] h-auto"
                  ref={tiltRef5}
                  onClick={() => setIsOpen5(true)}
                >
                  <Image
                    src="/images/certificate_5.jpg"
                    alt="certificate5"
                    width={500}
                    height={350}
                    className="rounded-lg cursor-pointer"
                  />
                </div>

                <Modal
                  isOpen={isOpen5}
                  onRequestClose={() => setIsOpen5(false)}
                  className="flex justify-center items-center h-full"
                  overlayClassName="fixed inset-0 bg-black/70 z-50"
                >
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen5(false)}
                      className="absolute top-2 right-5 text-black text-3xl font-bold cursor-pointer"
                    >
                      &times;
                    </button>
                    <Image
                      src="/images/certificate_5.jpg"
                      alt="project5"
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                  </div>
                </Modal>

                <div className="text-center mt-10">
                  <h1 className="text-2xl font-black text-sky-400">
                    Head of the Public Relations Division
                  </h1>
                  <p className="text-gray-600 text-base font-bold">
                    2021 - 2022
                  </p>
                  <p className="text-gray-600 text-base mt-4">
                    This certificate is awarded as evidence of having served as
                    the head of the public relations division.
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex flex-col items-center">
                <div
                  className="w-[500px] h-auto"
                  ref={tiltRef6}
                  onClick={() => setIsOpen6(true)}
                >
                  <Image
                    src="/images/certificate_6.jpg"
                    alt="certificate6"
                    width={500}
                    height={350}
                    className="rounded-lg cursor-pointer"
                  />
                </div>

                <Modal
                  isOpen={isOpen6}
                  onRequestClose={() => setIsOpen6(false)}
                  className="flex justify-center items-center h-full"
                  overlayClassName="fixed inset-0 bg-black/70 z-50"
                >
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen6(false)}
                      className="absolute top-2 right-5 text-black text-3xl font-bold cursor-pointer"
                    >
                      &times;
                    </button>
                    <Image
                      src="/images/certificate_6.jpg"
                      alt="project6"
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                  </div>
                </Modal>

                <div className="text-center mt-10">
                  <h1 className="text-2xl font-black text-sky-400">
                    MSIB Participants Batch 3
                  </h1>
                  <p className="text-gray-600 text-base font-bold">2022</p>
                  <p className="text-gray-600 text-base mt-4">
                    This certificate is awarded as proof of having completed the
                    internship at PT. Central AI.
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex flex-col items-center">
                <div
                  className="w-[500px] h-auto"
                  ref={tiltRef7}
                  onClick={() => setIsOpen7(true)}
                >
                  <Image
                    src="/images/certificate_7.png"
                    alt="certificate7"
                    width={500}
                    height={350}
                    className="rounded-lg cursor-pointer"
                  />
                </div>

                <Modal
                  isOpen={isOpen7}
                  onRequestClose={() => setIsOpen7(false)}
                  className="flex justify-center items-center h-full"
                  overlayClassName="fixed inset-0 bg-black/70 z-50"
                >
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen7(false)}
                      className="absolute top-2 right-5 text-black text-3xl font-bold cursor-pointer"
                    >
                      &times;
                    </button>
                    <Image
                      src="/images/certificate_7.png"
                      alt="project7"
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                  </div>
                </Modal>

                <div className="text-center mt-10">
                  <h1 className="text-2xl font-black text-sky-400">
                    Front End JavaScript Wave 2
                  </h1>
                  <p className="text-gray-600 text-base font-bold">2022</p>
                  <p className="text-gray-600 text-base mt-4">
                    This certificate is awarded as proof of having completed the
                    JavaScript learning activities.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="cursor-pointer bg-sky-600 text-white" />
          <CarouselNext className="cursor-pointer bg-sky-600 text-white" />
        </Carousel>
      </div>
    </div>
  );
}
