"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import Image from "next/image";
import Rui from "public/images/FullSizeRender.jpeg";
import design from "public/images/design.png";
import code from "public/images/code.png";
import web1 from "public/images/contact_seller.gif";
import web2 from "public/images/Scheduler.gif";
import web3 from "public/images/Talento.gif";


import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white pb-10 px-10 duration-500 md:px-20 lg:px-40 dark:duration-500 dark:bg-gray-900 dark:text-white ">
        <section className="min-h-screen ">
          <nav className="py-6 flex justify-between">
            <h1 className="text-xl  ">Rui Dantas</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-xl"
                  onClick={() =>
                    setDarkMode(!darkMode)
                  }
                />
              </li>
              <li>
                <a
                  href="RuisResume.pdf" target={"_blank"}
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 mx-auto">
            <Image
              src={Rui}
              className="rounded-full w-80 h-auto mb-3 md: mx-auto"
              objectFit="cover"
              alt=""
            />

            <h2 className="text-2xl py-2 text-teal-600 font-medium md: text-1xl">
              Rui Dantas
            </h2>
            <h3 className="text-xl py-2 md:text-xl">Full-Stack Developer</h3>
            <p className=" text-md py-5 leading-8 text-gray-800 dark:text-white">
              Born in 1998 in Toronto, Ontario. I believe Web Development can be
              more diverse and inspiring. With a mission to present the
              possibilities of the internet, I am pursuing new expressions
              through experiments and thoughts.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a
              href="https://www.linkedin.com/in/rui-dantas-043078248/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://instagram.com/whosrui" target="_blank">
              <AiFillInstagram />
            </a>
            <a href="https://github.com/Ruheee" target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </section>

        <section>
          <div className="lg:flex gap-10 justify-around">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-sky-950">
              <Image
                src={design}
                width={100}
                height={100}
                className="m-auto"
                alt=""
              />
              <h4 className="text-lg font-medium pt-8 pb-2 lg: w-60 md: mx-auto dark:text-white">
                Design Programs
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">After Effects</p>
              <p className="text-gray-800 py-1 dark:text-white">Premier Pro</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-sky-950">
              <Image src={code} width={100} height={100} className="m-auto" />
              <h4 className="text-lg font-medium pt-8 pb-2 lg: w-60 md: mx-auto">
                Languages
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">JavaScript</p>
              <p className="text-gray-800 py-1 dark:text-white">Ruby</p>
              <p className="text-gray-800 py-1 dark:text-white">HTML</p>
              <p className="text-gray-800 py-1 dark:text-white">CSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-sky-950">
              <Image
                src={design}
                width={100}
                height={100}
                className="m-auto"
                alt=""
              />
              <h4 className="text-lg font-medium pt-8 pb-2 lg: w-60 md: mx-auto">
                Frameworks & Libraries
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">React</p>
              <p className="text-gray-800 py-1 dark:text-white">Next.js</p>
              <p className="text-gray-800 py-1 dark:text-white">Node.js</p>
              <p className="text-gray-800 py-1 dark:text-white">Express & EJS</p>
              <p className="text-gray-800 py-1 dark:text-white">Ajax & Axios</p>
              <p className="text-gray-800 py-1 dark:text-white">Bootstrap, SASS, & Tailwind</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1 text-center">Projects</h3>
          <div className=" shadow-lg p-10 rounded-xl my-10 text-start dark:bg-sky-950">
            <Image
              src={web1}
              width={600}
              height={600}
              className="m-auto rounded-md"
              alt=""
            />
            <h4 className="text-xl font-medium pt-8 pb-2 text-center">
              Card Heroes
            </h4>
            <p className="text-start mb-5">
              Card Heroes is the ultimate destination for trading card
              enthusiasts. With over a million cards to choose from, we have the
              perfect card for every collector.
            </p>
            <a
              href="https://github.com/Ruheee/CardHeros"
              target="_blank"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
            >
              Git
            </a>
          </div>
          <div className=" shadow-lg p-10 rounded-xl my-10 text-start dark:bg-sky-950 dark:shadow-sm">
            <Image
              src={web2}
              width={600}
              height={600}
              className="m-auto rounded-md"
              alt=""
            />
            <h4 className="text-xl font-medium pt-8 pb-2 text-center">
              Interview Scheduler
            </h4>
            <p className="text-start mb-5">
              Interview Scheduler is a single-page application (SPA) that allows
              users to book technical interviews between students and mentors.
            </p>
            <a
              href="https://github.com/Ruheee/scheduler"
              target="_blank"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
            >
              Git
            </a>
          </div>
          <div className=" shadow-lg p-10 rounded-xl mt-10 text-start  dark:bg-sky-950">
            <Image
              src={web3}
              width={600}
              height={600}
              className="m-auto rounded-md"
              alt=""
            />
            <h4 className="text-xl font-medium pt-8 pb-2 text-center">
              Talento
            </h4>
            <p className="text-start mb-5">
              Talento is a revolutionary job search platform that leverages the
              swipe mechanic from popular dating apps to streamline the job
              hunting process for both employers and job seekers.
            </p>
            <a
              href="https://github.com/Ruheee/Talento"
              target="_blank"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
            >
              Git
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
