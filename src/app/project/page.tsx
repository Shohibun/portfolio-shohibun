"use client";

import React, { useRef, useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import Modal from "react-modal";

// Extend HTMLDivElement to include vanillaTilt
declare global {
  interface HTMLElement {
    vanillaTilt?: {
      destroy: () => void;
    };
  }
}

export default function Project() {
  const tiltRef1 = useRef<HTMLDivElement>(null);
  const tiltRef2 = useRef<HTMLDivElement>(null);
  const tiltRef3 = useRef<HTMLDivElement>(null);
  const tiltRef4 = useRef<HTMLDivElement>(null);
  const tiltRef5 = useRef<HTMLDivElement>(null);
  const tiltRef6 = useRef<HTMLDivElement>(null);
  const tiltRef7 = useRef<HTMLDivElement>(null);
  const tiltRef8 = useRef<HTMLDivElement>(null);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  useEffect(() => {
    const node1 = tiltRef1.current;
    const node2 = tiltRef2.current;
    const node3 = tiltRef3.current;
    const node4 = tiltRef4.current;
    const node5 = tiltRef5.current;
    const node6 = tiltRef6.current;
    const node7 = tiltRef7.current;
    const node8 = tiltRef8.current;
    if (node1) {
      VanillaTilt.init(node1, {
        max: 15,
        speed: 400,
        scale: 1.1,
        glare: true,
        "max-glare": 0.3,
      });
    }

    if (node2) {
      VanillaTilt.init(node2, {
        max: 15,
        speed: 400,
        scale: 1.1,
        glare: true,
        "max-glare": 0.3,
      });
    }

    if (node3) {
      VanillaTilt.init(node3, {
        max: 15,
        speed: 400,
        scale: 1.1,
        glare: true,
        "max-glare": 0.3,
      });
    }

    if (node4) {
      VanillaTilt.init(node4, {
        max: 15,
        speed: 400,
        scale: 1.1,
        glare: true,
        "max-glare": 0.3,
      });
    }

    if (node5) {
      VanillaTilt.init(node5, {
        max: 15,
        speed: 400,
        scale: 1.1,
        glare: true,
        "max-glare": 0.3,
      });
    }

    if (node6) {
      VanillaTilt.init(node6, {
        max: 15,
        speed: 400,
        scale: 1.1,
        glare: true,
        "max-glare": 0.3,
      });
    }

    if (node7) {
      VanillaTilt.init(node7, {
        max: 15,
        speed: 400,
        scale: 1.1,
        glare: true,
        "max-glare": 0.3,
      });
    }

    if (node8) {
      VanillaTilt.init(node8, {
        max: 15,
        speed: 400,
        scale: 1.1,
        glare: true,
        "max-glare": 0.3,
      });
    }

    return () => {
      node1?.vanillaTilt?.destroy();
      node2?.vanillaTilt?.destroy();
      node3?.vanillaTilt?.destroy();
      node4?.vanillaTilt?.destroy();
      node5?.vanillaTilt?.destroy();
      node6?.vanillaTilt?.destroy();
      node7?.vanillaTilt?.destroy();
      node8?.vanillaTilt?.destroy();
    };
  }, []);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full flex justify-center items-center mt-25">
      <div className="w-9/12">
        <h1 className="text-sky-400 text-4xl font-bold text-center">Project</h1>

        <div
          className="grid grid-cols-2 gap-4 shadow-md border-2 rounded-lg mt-20 hover:shadow-xl"
          data-aos="zoom-in-up"
        >
          <div className="col-span-1 flex justify-center items-center">
            <div className="p-7">
              <a
                href="https://binar-car.netlify.app/"
                className="hover:no-underline"
              >
                <h1 className="text-3xl font-bold hover:text-sky-400">
                  Binar Car Rental
                </h1>
              </a>

              <p className="text-xl text-gray-600 mt-8">
                Binar Car Rental is a website designed to simplify the process
                of car rental transactions online, allowing users to easily
                select, book, and rent cars according to their needs.
              </p>
            </div>
          </div>

          <div
            className="col-span-1 h-96"
            ref={tiltRef1}
            onClick={() => setIsOpen1(true)}
          >
            <Image
              src="/images/Project.png"
              alt="project1"
              fill
              className="object-cover rounded-lg cursor-pointer"
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
                src="/images/Project.png"
                alt="project1"
                width={800}
                height={800}
                className="rounded-lg"
              />
            </div>
          </Modal>
        </div>

        <div
          className="grid grid-cols-2 gap-4 shadow-md border-2 rounded-lg mt-20 hover:shadow-xl"
          data-aos="zoom-in-up"
        >
          <div
            className="col-span-1 h-96"
            ref={tiltRef2}
            onClick={() => setIsOpen2(true)}
          >
            <Image
              src="/images/Project_2.png"
              alt="project2"
              fill
              className="object-cover rounded-lg cursor-pointer"
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
                src="/images/Project_2.png"
                alt="project2"
                width={800}
                height={800}
                className="rounded-lg"
              />
            </div>
          </Modal>

          <div className="col-span-1 flex justify-center items-center">
            <div className="p-7">
              <a href="#" className="hover:no-underline">
                <h1 className="text-3xl font-bold hover:text-sky-400">
                  Second Hand
                </h1>
              </a>

              <p className="text-xl text-gray-600 mt-8">
                Second Hand is a website aimed at facilitating the buying and
                selling of second-hand goods online, making it easier for users
                to find and sell preloved products safely and practically.
              </p>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-4 shadow-md border-2 rounded-lg mt-20 hover:shadow-xl"
          data-aos="zoom-in-up"
        >
          <div className="col-span-1 flex justify-center items-center">
            <div className="p-7">
              <a href="https://centralai.my.id/" className="hover:no-underline">
                <h1 className="text-3xl font-bold hover:text-sky-400">
                  Central AI
                </h1>
              </a>

              <p className="text-xl text-gray-600 mt-8">
                Central AI is a digital startup focused on providing fast and
                effective services for SMEs, companies, universities, and other
                organizations that have websites or applications. The company
                offers a variety of products based on artificial intelligence
                (AI), such as chatbots, OCR (Optical Character Recognition),
                Point of Sales (POS), and Notula. These products are designed to
                assist in the digitization and operational efficiency of various
                registered entities or similar.
              </p>
            </div>
          </div>

          <div
            className="col-span-1 h-96"
            ref={tiltRef3}
            onClick={() => setIsOpen3(true)}
          >
            <Image
              src="/images/Project_3.png"
              alt="project3"
              fill
              className="object-cover rounded-lg cursor-pointer"
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
                src="/images/Project_3.png"
                alt="project3"
                width={800}
                height={800}
                className="rounded-lg"
              />
            </div>
          </Modal>
        </div>

        <div
          className="grid grid-cols-2 gap-4 shadow-md border-2 rounded-lg mt-20 hover:shadow-xl"
          data-aos="zoom-in-up"
        >
          <div
            className="col-span-1 h-96"
            ref={tiltRef4}
            onClick={() => setIsOpen4(true)}
          >
            <Image
              src="/images/Project_4.png"
              alt="project4"
              fill
              className="object-cover rounded-lg cursor-pointer"
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
                src="/images/Project_4.png"
                alt="project4"
                width={800}
                height={800}
                className="rounded-lg"
              />
            </div>
          </Modal>

          <div className="col-span-1 flex justify-center items-center">
            <div className="p-7">
              <a
                href="https://green-care-blitz.netlify.app/"
                className="hover:no-underline"
              >
                <h1 className="text-3xl font-bold hover:text-sky-400">
                  Green Care Blitz
                </h1>
              </a>

              <p className="text-xl text-gray-600 mt-8">
                Green Care Blitz is a website designed as a ready-to-use
                template for creating websites with a modern and responsive
                appearance.
              </p>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-4 shadow-md border-2 rounded-lg mt-20 hover:shadow-xl"
          data-aos="zoom-in-up"
        >
          <div className="col-span-1 flex justify-center items-center">
            <div className="p-7">
              <a href="#" className="hover:no-underline">
                <h1 className="text-3xl font-bold hover:text-sky-400">
                  POS | Central AI
                </h1>
              </a>

              <p className="text-xl text-gray-600 mt-8">
                POS is a website designed to help users record point of sale
                transactions comprehensively. This service is provided for free
                without any time usage limits, making it suitable for business
                operators to manage sales efficiently.
              </p>
            </div>
          </div>

          <div
            className="col-span-1 h-96"
            ref={tiltRef5}
            onClick={() => setIsOpen5(true)}
          >
            <Image
              src="/images/Project_5.png"
              alt="project5"
              fill
              className="object-cover rounded-lg cursor-pointer"
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
                src="/images/Project_5.png"
                alt="project5"
                width={800}
                height={800}
                className="rounded-lg"
              />
            </div>
          </Modal>
        </div>

        <div
          className="grid grid-cols-2 gap-4 shadow-md border-2 rounded-lg mt-20 hover:shadow-xl"
          data-aos="zoom-in-up"
        >
          <div
            className="col-span-1 h-96"
            ref={tiltRef6}
            onClick={() => setIsOpen6(true)}
          >
            <Image
              src="/images/Project_6.png"
              alt="project6"
              fill
              className="object-cover rounded-lg cursor-pointer"
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
                src="/images/Project_6.png"
                alt="project6"
                width={800}
                height={800}
                className="rounded-lg"
              />
            </div>
          </Modal>

          <div className="col-span-1 flex justify-center items-center">
            <div className="p-7">
              <a href="#" className="hover:no-underline">
                <h1 className="text-3xl font-bold hover:text-sky-400">
                  PWA | Central AI
                </h1>
              </a>

              <p className="text-xl text-gray-600 mt-8">
                PWA | Central AI is the Progressive Web App version of the main
                Central AI site, designed with an optimized look and size to
                provide a more responsive and lightweight user experience,
                especially when accessed via mobile devices and tablets.
              </p>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-4 shadow-md border-2 rounded-lg mt-20 hover:shadow-xl"
          data-aos="zoom-in-up"
        >
          <div className="col-span-1 flex justify-center items-center">
            <div className="p-7">
              <a href="#" className="hover:no-underline">
                <h1 className="text-3xl font-bold hover:text-sky-400">
                  Learning Management System (LMS) Yapendik
                </h1>
              </a>

              <p className="text-xl text-gray-600 mt-8">
                The Yapendik Learning Management System (LMS) is a web-based
                platform developed to support the learning process in schools
                under the Yayasan Pendidikan (Yapendik) foundation. This system
                is designed to facilitate digital teaching and learning
                activities, such as material delivery, assignment submission,
                online testing, and communication between teachers and students.
                With the Yapendik LMS, the learning process becomes more
                structured, efficient, and accessible anytime and anywhere.
              </p>
            </div>
          </div>

          <div
            className="col-span-1 h-96"
            ref={tiltRef7}
            onClick={() => setIsOpen7(true)}
          >
            <Image
              src="/images/Project_7.png"
              alt="project17"
              fill
              className="object-cover rounded-lg cursor-pointer"
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
                src="/images/Project_7.png"
                alt="project7"
                width={800}
                height={800}
                className="rounded-lg"
              />
            </div>
          </Modal>
        </div>

        <div
          className="grid grid-cols-2 gap-4 shadow-md border-2 rounded-lg mt-20 hover:shadow-xl"
          data-aos="zoom-in-up"
        >
          <div
            className="col-span-1 h-96"
            ref={tiltRef8}
            onClick={() => setIsOpen8(true)}
          >
            <Image
              src="/images/Project_8.png"
              alt="project8"
              fill
              className="object-cover rounded-lg cursor-pointer"
            />
          </div>

          <Modal
            isOpen={isOpen8}
            onRequestClose={() => setIsOpen8(false)}
            className="flex justify-center items-center h-full"
            overlayClassName="fixed inset-0 bg-black/70 z-50"
          >
            <div className="relative">
              <button
                onClick={() => setIsOpen8(false)}
                className="absolute top-2 right-5 text-black text-3xl font-bold cursor-pointer"
              >
                &times;
              </button>
              <Image
                src="/images/Project_8.png"
                alt="project8"
                width={800}
                height={800}
                className="rounded-lg"
              />
            </div>
          </Modal>

          <div className="col-span-1 flex justify-center items-center">
            <div className="p-7">
              <a href="#" className="hover:no-underline">
                <h1 className="text-3xl font-bold hover:text-sky-400">
                  Liosa Cosplay
                </h1>
              </a>

              <p className="text-xl text-gray-600 mt-8">
                Liosa Cosplay is a website that contains information about
                cosplayers and the purchase of cosplay items. This website was
                created to fulfill the final project of the SIM-K HariSenin
                bootcamp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
