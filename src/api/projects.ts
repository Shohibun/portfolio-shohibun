// /app/api/projects/route.ts
import { NextResponse } from "next/server";

const allProjects = [
  {
    id: 1,
    title: "Binar Car Rental",
    description:
      "Binar Car Rental is a website designed to simplify the process of car rental transactions online, allowing users to easily select, book, and rent cars according to their needs.",
    link: "https://binar-car.netlify.app/",
    image: "/images/Project.png",
    aos: "fade-up-right",
  },
  {
    id: 2,
    title: "Second Hand",
    description:
      "Second Hand is a website aimed at facilitating the buying and selling of second-hand goods online, making it easier for users to find and sell preloved products safely and practically.",
    link: "#",
    image: "/images/Project_2.png",
    aos: "fade-up-left",
  },
  {
    id: 3,
    title: "Central AI",
    description:
      "Central AI is a digital startup focused on providing fast and effective services for SMEs, companies, universities, and other organizations that have websites or applications. The company offers a variety of products based on artificial intelligence (AI), such as chatbots, OCR (Optical Character Recognition), Point of Sales (POS), and Notula. These products are designed to assist in the digitization and operational efficiency of various registered entities or similar.",
    link: "https://centralai.my.id/",
    image: "/images/Project_3.png",
    aos: "fade-down-right",
  },
  {
    id: 4,
    title: "Green Care Blitz",
    description:
      "Green Care Blitz is a website designed as a ready-to-use template for creating websites with a modern and responsive appearance.",
    link: "https://green-care-blitz.netlify.app/",
    image: "/images/Project_4.png",
    aos: "fade-down-left",
  },
  {
    id: 5,
    title: "POS | Central AI",
    description:
      "POS is a website designed to help users record point of sale transactions comprehensively. This service is provided for free without any time usage limits, making it suitable for business operators to manage sales efficiently.",
    link: "#",
    image: "/images/Project_5.png",
    aos: "fade-up-right",
  },
  {
    id: 6,
    title: "PWA | Central AI",
    description:
      "PWA | Central AI is the Progressive Web App version of the main Central AI site, designed with an optimized look and size to provide a more responsive and lightweight user experience, especially when accessed via mobile devices and tablets.",
    link: "#",
    image: "/images/Project_6.png",
    aos: "fade-up-left",
  },
  {
    id: 7,
    title: "Learning Management System (LMS) Yapendik",
    description:
      "The Yapendik Learning Management System (LMS) is a web-based platform developed to support the learning process in schools under the Yayasan Pendidikan (Yapendik) foundation. This system is designed to facilitate digital teaching and learning activities, such as material delivery, assignment submission, online testing, and communication between teachers and students. With the Yapendik LMS, the learning process becomes more structured, efficient, and accessible anytime and anywhere.",
    link: "#",
    image: "/images/Project_7.png",
    aos: "fade-down-right",
  },
  {
    id: 8,
    title: "Liosa Cosplay",
    description:
      "Liosa Cosplay is a website that contains information about cosplayers and the purchase of cosplay items. This website was created to fulfill the final project of the SIM-K HariSenin bootcamp.",
    link: "#",
    image: "/images/Project_8.png",
    aos: "fade-down-left",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const start = parseInt(searchParams.get("start") || "0");
  const limit = parseInt(searchParams.get("limit") || "3");

  const paginated = allProjects.slice(start, start + limit);

  return NextResponse.json(paginated);
}
