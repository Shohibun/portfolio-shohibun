"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    // AOS.refresh();
  }, []);

  return (
    <div
      id="experience"
      className="w-full flex justify-center items-center mt-25"
    >
      <div className="w-9/12">
        <h1 className="text-sky-400 text-4xl font-bold text-center">
          Experience
        </h1>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full mt-5"
        >
          <AccordionItem value="item-1" data-aos="fade-up">
            <AccordionTrigger className="text-xl cursor-pointer hover:no-underline">
              Education
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <h1 className="text-sky-400 text-xl font-bold">
                    S1 - Informatics <br />
                    University of Jember
                  </h1>

                  <p className="text-gray-400 text-sm mt-2">
                    Jember, 2019 - 2023
                  </p>
                </div>

                <div className="col-span-1">
                  <p className="text-base text-gray-600">
                    During college, I actively participated in lectures, student
                    organizations, as well as seminars and workshops to develop
                    insights and networks. I also have experience as a teaching
                    assistant for the Artificial Intelligence course, helping
                    students understand the material, grading assignments, and
                    supervising practical sessions, which also trained my
                    communication skills and sense of responsibility.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" data-aos="fade-up">
            <AccordionTrigger className="text-xl cursor-pointer hover:no-underline">
              Internship
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <h1 className="text-sky-400 text-xl font-bold">
                    PT. Central AI
                  </h1>

                  <h2 className="text-lg text-gray-700">
                    FrontEnd Developer Intern
                  </h2>

                  <p className="text-gray-400 text-sm mt-2">
                    Online, Agustus 2022 - Desember 2022
                  </p>
                </div>

                <div className="col-span-1">
                  <p className="text-base text-gray-600">
                    During my internship at PT Central AI, I revised the website
                    design using Figma and implemented it with Python (Flask).
                    In addition, I worked on projects using JavaScript
                    (React.js), HTML, CSS, and native JavaScript, as well as
                    using Bootstrap and Tailwind CSS for styling. I also
                    participated as a speaker in an online seminar, which
                    developed my communication, presentation, and teamwork
                    skills.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" data-aos="fade-up">
            <AccordionTrigger className="text-xl cursor-pointer hover:no-underline">
              Organization
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <h1 className="text-sky-400 text-xl font-bold">
                    Student Association of Informatics (HMIF)
                  </h1>

                  <h2 className="text-lg text-gray-700">
                    Public Relations Division Member
                  </h2>

                  <p className="text-gray-400 text-sm mt-2">
                    Jember, 2019 - 2021
                  </p>
                </div>

                <div className="col-span-1">
                  <p className="text-base text-gray-600">
                    During my time as a member of the Public Relations Division
                    in the Computer Science Student Association (HMIF), I was
                    responsible for gathering student aspirations and
                    disseminating information received by HMIF, both related to
                    academics and non-academics, to all Computer Science
                    students. Some of the activities I undertook include
                    managing the Computer Science social media and establishing
                    collaborations with other organizations and institutions.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="col-span-1">
                  <h1 className="text-sky-400 text-xl font-bold">
                    Student Association of Informatics (HMIF)
                  </h1>

                  <h2 className="text-lg text-gray-700">
                    Head of the Public Relations Division
                  </h2>

                  <p className="text-gray-400 text-sm mt-2">
                    Jember, 2021 - 2022
                  </p>
                </div>

                <div className="col-span-1">
                  <p className="text-base text-gray-600">
                    During my tenure as the Head of the Public Relations
                    Division at the Information Technology Student Association
                    (HMIF), I was responsible for coordinating the tasks of
                    members and aligning the division is goals.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" data-aos="fade-up">
            <AccordionTrigger className="text-xl cursor-pointer hover:no-underline">
              Course
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <h1 className="text-sky-400 text-xl font-bold">
                    Binar Academy
                  </h1>

                  <h2 className="text-lg text-gray-700">FrontEnd JavaScript</h2>

                  <p className="text-gray-400 text-sm">
                    Jember, February 2022 - August 2022
                  </p>
                </div>

                <div className="col-span-1">
                  <p className="text-base text-gray-600">
                    Frontend JavaScript is a program by Binar Academy that
                    covers JavaScript from the basics up to React.js.
                    Participants learn through modules, complete projects after
                    each module, and finalize with a team project involving
                    collaboration between frontend and backend development.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="col-span-1">
                  <h1 className="text-sky-400 text-xl font-bold">
                    SIM - K HariSenin
                  </h1>

                  <h2 className="text-lg text-gray-700">
                    Full Stack Web Developer
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Jember, December 2023 - January 2024
                  </p>
                </div>

                <div className="col-span-1">
                  <p className="text-base text-gray-600">
                    The Full Stack Web Developer bootcamp is an introductory
                    program designed for beginners to learn the fundamental
                    concepts of web development, including HTML, CSS, and
                    JavaScript
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
