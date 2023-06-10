import React from "react";

export default function Home() {
  return (
    <div className="bg-cool p-10 b text-left">
      <h2 className="text-blue-600">About Me</h2>
      <br></br>
      <img src="rani.jpg" alt="Me" className="w-full rounded-sm h-full"></img>
      <p className="text-xl mt-2">
        My name is Rani Giterman, and I am a sophomore studying at Ironi D
        Highschool. I'm growing up in a family of tremendously skilled
        programmers and I know that being some type of an engineer is my
        calling. My passion for computers and technology began at a young age as
        I watched my siblings playing video games on the{" "}
        <a
          className="text-blue-600 decoration-transparent"
          href="https://en.wikipedia.org/wiki/Wii"
        >
          Wii
        </a>
        . I began my journey of coding around age 9, although I consider I
        really got into it at age 14. I like to enrich my knowledge in the
        computer-related world, play video-games and chess, grind{" "}
        <a
          className="text-blue-600 decoration-transparent"
          href="https://leetcode.com/RaniGiterman/"
        >
          leetcode
        </a>
        , answer{" "}
        <a
          className="text-blue-600 decoration-transparent"
          href="https://stackoverflow.com/users/17802928/rani-giterman?tab=profile"
        >
          stackoverflow{" "}
        </a>
        questions and listen to music.
      </p>
    </div>
  );
}
