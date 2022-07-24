import React from "react";

export default function Home() {
  return (
    <div className="bg-white p-10 b text-left w-full">
      <h2 className="text-blue-600">About Me</h2>
      <br></br>
      <img src="rani.jpg" alt="Me" className="w-full h-full"></img>
      <p className="text-xl mt-2">
        <s>
          Hello, my name is (name). I am a (year in school) studying at
          (school).
        </s>{" "}
        Hello, my name is Rani Giterman, and I am a sophomore studying at Ironi
        D Highschool. I'm growing up in a family of tremendously skilled
        programmers and know that being some type of an engineer is my calling.
        My passion for computers began at a young age as I watched my siblings
        playing video games on the{" "}
        <a
          className="text-blue-600 decoration-transparent"
          href="https://en.wikipedia.org/wiki/Wii"
        >
          Wii
        </a>
        . I began my journey of coding around age 9, altough I consider I really
        got into it at age 14. In my free time I like to enrich my knowledge in
        the computer-related world, as well as I like to play video games.
      </p>
    </div>
  );
}
