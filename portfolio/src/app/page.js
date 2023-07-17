import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import Image from "../../public/FullSizedRender.jpeg"

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
          <div className="">
            <img src={Image} alt="" />
          </div>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Rui Dantas</h2>
            <h3 className="text-2xl py-2">Front-End Developer</h3>
            <p className=" text-md py-5 leading-8 text-gray-800">
              Born in 1998 in Toronto, Ontario. I believe Web Development can be
              more diverse and inspiring. With a mission to present the
              possibilities of the internet, I am pursuing new expressions
              through experiments and thoughts.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/rui-dantas-043078248/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://instagram.com/whosrui" target="_blank"><AiFillInstagram/></a>
            <a href=""><AiFillGithub /></a>
          </div>
          
        </section>
      </main>
    </div>
  );
}
