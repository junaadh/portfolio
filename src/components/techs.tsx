import Image from "next/image";
import rust from "@/assets/Rust.svg";
import ts from "@/assets/TypeScript.svg";
import js from "@/assets/JS.svg";
import java from "@/assets/Java.svg";
import nextjs from "@/assets/Next-js.svg";
import css from "@/assets/CSS.svg";
import html from "@/assets/HTML.svg";
import mysql from "@/assets/MySQL.svg";
import swift from "@/assets/swift.svg";
import mongodb from "@/assets/mongodb-icon.svg";
import arm64 from "@/assets/arm64.png";

Image;

export default function Techs() {
  return (
    <>
      <p className="pt-6 font-bold text-xl text-orange-600/60">
        Technologies worked with:
      </p>
      <div
        id="techs"
        className="flex flex-col flex-wrap justify-center items-center w-full"
      >
        <br />
        <div className="flex flex-wrap justify-center items-center">
          <Image
            src={rust}
            width={65}
            className="mx-3 mb-4 hover:animate-bounce h-auto"
            alt="Rust"
          />
          <Image
            src={java}
            width={65}
            className="mx-3 mb-4 hover:animate-bounce h-auto"
            alt="Java"
          />
          <Image
            src={mysql}
            width={65}
            className="mx-3 mb-4 hover:animate-bounce h-auto"
            alt="MySQL"
          />
          <Image
            src={html}
            width={65}
            className="mx-3 mb-4 hover:animate-bounce h-auto"
            alt="HTML5"
          />
          <Image
            src={css}
            width={65}
            className="mx-3 mb-4 hover:animate-bounce h-auto"
            alt="css"
          />
          <Image
            src={nextjs}
            width={65}
            className="mx-3 mb-4 hover:animate-bounce h-auto"
            alt="nextjs"
          />
          <Image
            src={js}
            width={65}
            className="mx-3 mb-4 hover:animate-bounce h-auto"
            alt="JavaScript"
          />
          <Image
            src={ts}
            width={65}
            className="mx-3 mb-4 hover:animate-bounce h-auto"
            alt="TypeScript"
          />
          <Image
            src={swift}
            width={65}
            className="mx-3 mb-4 hover:animate-bounce h-auto"
            alt="Swift"
          />
          <Image
            src={mongodb}
            width={65}
            className="mx-3 mb-4 hover:animate-bounce h-auto"
            alt="MongoDB"
          />
          <Image
            src={arm64}
            width={65}
            className="mx-3 mb-4 hover:animate-bounce h-auto"
            alt="Arm64 Assembly"
          />
        </div>
      </div>
    </>
  );
}
