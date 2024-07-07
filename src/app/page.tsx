"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    const transformedText = transformText(inputText);
    setText(transformedText);
  };

  const transformText = (input: string) => {
    let result = "";
    let i = 0;

    while (i < input.length) {
      if (input[i] === "ř") {
        result += "z";
      } else if (input[i] === "h") {
        result += "ch";
      } else if (
        input[i] === "c" &&
        i + 1 < input.length &&
        input[i + 1] === "h"
      ) {
        result += "ch";
        i++;
      } else if (input[i] === "c") {
        result += "ts";
      } else if (input[i] === "j") {
        result += "i";
      } else if (input[i] === "ě") {
        result += "je";
      } else if (input[i] === "d") {
        result += "t";
      } else if (input[i] === "v") {
        result += "f";
      } else if (input[i] === "y" || input[i] === "ý") {
        result += "i";
      } else if (input[i] === "r") {
        result += "l";
      } else if (input[i] === "z") {
        result += "s";
      } else if (input[i] === "ď") {
        result += "ť";
      } else if (input[i] === "č" || input[i] === "ž" || input[i] === "š") {
        result += input[i];
      } else {
        result += input[i];
      }

      i++;
    }

    return result;
  };

  return (
    <main className="min-h-screen p-5 md:p-24 bg-gradient-to-r from-amber-500 to-amber-600">
      <header className="flex items-center gap-5 mb-5">
        <Image
          src="/shibainuyoga.svg"
          alt="Shiba Inu"
          width={100}
          height={100}
        />
        <h1 className="sm:text-[20px] md:text-3xl font-bold text-amber-900">
          SHIBALANG
        </h1>
      </header>
      <div className="flex md:flex-row flex-col gap-5">
        <textarea
          placeholder="Piš sem"
          className="md:w-1/2 h-80 bg-orange-50 border-[4px] rounded-lg resize-none p-4 outline-none hover:border-amber-600 focus:border-amber-700 transition-all duration-500 ease-in-out"
          onChange={handleChange}
        ></textarea>
        <div className="md:w-1/2 h-80 border bg-orange-100 rounded-lg p-4">
          {text}
        </div>
      </div>
      <footer className="flex flex-col items-center md:flex-row md:justify-between gap-3 px-2 py-2 mt-2">
        <small>© {new Date().getFullYear()}. Všechna práva vyhrazena.</small>
        <small>
          Stvořitelka{" "}
          <a
            href="https://sabini.io"
            className="text-orange-200 font-semibold hover:text-orange-300 hover:underline"
          >
            Sabina Balejíková
          </a>
        </small>
      </footer>
    </main>
  );
}
