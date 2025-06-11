import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

export default function SkillGroup() {
  return (
    <>
      <section className="">
        <div className="text-3xl">
          <h2 className="absolute top-154 left-40 text-2xl md:top-236 md:p-0.5 md:left-108 md:text-3xl">
            Skill Groups
          </h2>
        </div>
        <div className="flex justify-center gap-6 md:gap-20">
          <div className="relative flex items-center justify-center h-24 w-24 group">
            <p className="absolute -top-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              HTML
            </p>
            <FaHtml5 className="text-6xl md:text-8xl" />
          </div>
          <div className="relative flex items-center justify-center h-24 w-24 group">
            <p className="absolute -top-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              CSS
            </p>
            <IoLogoCss3 className="text-6xl md:text-8xl" />
          </div>
          <div className="relative flex items-center justify-center h-24 w-24 group">
            <p className="absolute -top-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              JAVASCRIPT
            </p>
            <IoLogoJavascript className="text-6xl md:text-8xl" />
          </div>
          <div className="relative flex items-center justify-center h-24 w-24 group">
            <p className="absolute -top-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              REACT
            </p>
            <FaReact className="text-6xl md:text-8xl" />
          </div>
          <div className="relative flex items-center justify-center h-24 w-24 group">
            <p className="absolute -top-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              NEXT.js
            </p>
            <RiNextjsFill className="text-6xl md:text-8xl" />
          </div>
          <div className="relative flex items-center justify-center h-24 w-24 group">
            <p className="absolute -top-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              TAILWIND
            </p>
            <RiTailwindCssFill className="text-6xl md:text-8xl" />
          </div>
        </div>
      </section>
    </>
  );
}
