import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import Image from "next/image";
import Rui from "public/images/FullSizeRender.jpeg";
import design from "public/images/design.png";
import code from "public/images/code.png";
import web1 from "public/images/contact_seller.gif";

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl  ">Rui Dantas</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <div className="relative rounded-full w-80 h-80 mb-10 mx-auto">
              <Image
                src={Rui}
                className=" rounded-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Rui Dantas
            </h2>
            <h3 className="text-2xl py-2">Front-End Developer</h3>
            <p className=" text-md py-5 leading-8 text-gray-800">
              Born in 1998 in Toronto, Ontario. I believe Web Development can be
              more diverse and inspiring. With a mission to present the
              possibilities of the internet, I am pursuing new expressions
              through experiments and thoughts.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              href="https://www.linkedin.com/in/rui-dantas-043078248/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://instagram.com/whosrui" target="_blank">
              <AiFillInstagram />
            </a>
            <a href="">
              <AiFillGithub />
            </a>
          </div>
        </section>

        <section>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} className="m-auto" />
              <h4 className="text-lg font-medium pt-8 pb-2">Design Programs</h4>
              <p className="text-gray-800 py-1 ">Photoshop</p>
              <p className="text-gray-800 py-1 ">Illustrator</p>
              <p className="text-gray-800 py-1 ">Figma</p>
              <p className="text-gray-800 py-1 ">After Effects</p>
              <p className="text-gray-800 py-1 ">Premier Pro</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} className="m-auto" />
              <h4 className="text-lg font-medium pt-8 pb-2">Languages</h4>
              <p className="text-gray-800 py-1 ">JavaScript</p>
              <p className="text-gray-800 py-1 ">Ruby</p>
              <p className="text-gray-800 py-1 ">HTML</p>
              <p className="text-gray-800 py-1 ">CSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} className="m-auto" />
              <h4 className="text-lg font-medium pt-8 pb-2">
                Frameworks & Libraries
              </h4>
              <p className="text-gray-800 py-1 ">React</p>
              <p className="text-gray-800 py-1 ">Next.js</p>
              <p className="text-gray-800 py-1 ">Node.js</p>
              <p className="text-gray-800 py-1 ">Express & EJS</p>
              <p className="text-gray-800 py-1 ">Ajax</p>
              <p className="text-gray-800 py-1 ">Bootstrap, SASS, Tailwind</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1 text-center">Projects</h3>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image
              src={web1}
              width={300}
              height={300}
              className="m-auto rounded-md"
            />
            <h4 className="text-lg font-medium pt-8 pb-2">Card Heroes</h4>
            <p className="text-start">
              Card Heroes is the ultimate destination for trading card
              enthusiasts. With over a million cards to choose from, we have the
              perfect card for every collector.
            </p>
            <a href="https://google.com" target="_blank">Git</a>
          </div>
        </section>
      </main>
    </div>
  );
}
