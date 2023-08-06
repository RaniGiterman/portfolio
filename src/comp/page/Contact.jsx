import React from "react";

export default function Contact() {
  function mail() {
    window.location.href = "mailto:rani.giterman10@gmail.com";
  }

  return (
    <div className="bg-cool p-10 b text-xl text-left mb-2 rounded">
      <h2 className="text-blue-600">Contact Me</h2>
      <div>
        The best way to contact me is via email at{" "}
        <div className="e cursor-pointer" onClick={mail}>
          rani.giterman10@gmail.com
        </div>
      </div>
      <br />
      <h3 className="text-blue-600">Media</h3>
      <ul>
        <li className="m">
          <a href="https://github.com/RaniGiterman">GitHub</a>
        </li>
        <li className="m">
          <a href="https://stackoverflow.com/users/17802928/rani-giterman">
            Stack Overflow
          </a>
        </li>
        <li className="m">
          <a href="https://leetcode.com/RaniGiterman/">LeetCode</a>
        </li>
        {/* <li className="m">
          <a href="https://www.hackerrank.com/progranner">HackerRank</a>
        </li> */}
        <li className="m">
          <a href="https://www.instagram.com/gitermanrani/">Instagram</a>
        </li>
        {/* <li className="m">
          <a href="https://link.clashroyale.com/invite/friend/en?tag=J0CJJ02Y0&token=z9tyxnze&platform=iOS">
            Clash Royale
          </a>
        </li> */}
      </ul>
    </div>
  );
}
