import React from "react";

export default function Home() {
  return (
    <div className="bg-cool p-10 b text-left rounded">
      <img src="rani.jpg" alt="Me" className="w-full rounded-sm h-full"></img>
      <br></br>
      <h2 className="text-blue-600">About Me</h2>
      <p className="text-xl mt-2">
        My name is Rani, and I'm a senior at Ironi D Highschool. I tend to
        dabble in all sorts of tech fields, but I'm especially drawn to anything
        the web has to offer. I like to enrich my knowledge in the
        computer-related world, play video-games and chess, and answer{" "}
        <a href="https://stackoverflow.com/users/17802928/rani-giterman?tab=profile">
          stackoverflow
        </a>{" "}
        and <a href="https://leetcode.com/RaniGiterman/">leetcode</a> questions.
      </p>
    </div>
  );
}
