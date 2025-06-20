import CopyRightIcon from "@/components/svg/copyrightIcon";
import GitHubIcon from "@/components/svg/githubIcon";
import InstagramIcon from "@/components/svg/instagramIcon";
import LinkedInIcon from "@/components/svg/linkedinIcon";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full flex justify-center items-center bg-sky-400 mt-35">
      <div className="w-9/12 mb-12">
        <div className="grid md:grid-cols-3 md:gap-20 p-7">
          <div className="md:col-span-1">
            <Image
              src="/images/logo.jpg"
              alt="photo"
              width={100}
              height={100}
              className="rounded-lg"
            />

            <h1 className="text-sm text-white mt-3">
              &quot;The decree of Allah will surely come, so do not ask for it
              to be hastened.&quot;
            </h1>

            <h2 className="text-sm font-bold text-white mt-1">
              <cite>Qur&#39;an Surah An-Nahl: 1</cite>
            </h2>
          </div>

          <div className="md:col-span-1 my-auto mt-5 md:mt-0">
            <p className="text-sm font-bold text-white">Email:</p>
            <p className="text-sm text-white mt-1">shohibunnajam@gmail.com</p>

            <p className="text-sm font-bold text-white mt-3">Phone Number:</p>
            <p className="text-sm text-white mt-1">+62-87896773970</p>
          </div>

          <div className="md:col-span-1 flex justify-center items-center mt-10 md:mt-0">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <a href="https://github.com/Shohibun">
                  <GitHubIcon />
                </a>
              </div>

              <div className="col-span-1">
                <a href="https://www.linkedin.com/in/shohibun-najam-ilma-ab481b20b/">
                  <LinkedInIcon />
                </a>
              </div>

              <div className="col-span-1">
                <a href="https://www.instagram.com/shohibun.najam/">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-10/12 border-2 text-white mx-auto mt-8" />

        <div className="flex justify-center mt-2">
          <span className="text-white pt-0.5 pr-1.5">
            <CopyRightIcon />
          </span>
          <span className="font-bold text-white text-sm">
            Copyright 2025 | Shohibun Najam Ilma
          </span>
        </div>
      </div>
    </div>
  );
}
