import React from "react";

export default function Home() {
  return (
    <div className="bg-cool p-10 b text-left rounded">
      <img src="rani.png" alt="Me" className="w-full rounded-sm h-full"></img>
      <br></br>
      <h2 className="text-blue-600">About Me</h2>
      <p className="text-xl mt-2">
        My name is Rani Giterman, and I am a junior studying at Ironi D
        Highschool. I began my coding journey at around age 9, although I
        consider I really got into it at 14. I like to enrich my knowledge in
        the computer-related world, play video-games and chess, and answer{" "}
        <a href="https://stackoverflow.com/users/17802928/rani-giterman?tab=profile">
          stackoverflow
        </a>{" "}
        and <a href="https://leetcode.com/RaniGiterman/">leetcode</a> questions.
      </p>
    </div>
  );
}
