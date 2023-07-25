import React from "react";

export default function Navbar({ switchPage, home }) {
  return (
    <ul className="flex">
      <li className="-ml-7">
        <div
          ref={home}
          onClick={(e) => switchPage(e.target, e.target.textContent)}
          className="bouncy text-2xl cursor-pointer hover:text-blue-600 text-blue-600 transition ease-in-out hover:-translate-y-1 -translate-y-1 hover:scale-110 duration-300"
        >
          Home
        </div>
      </li>
      <li className="ml-3">
        <div
          onClick={(e) => switchPage(e.target, e.target.textContent)}
          className="bouncy text-2xl cursor-pointer hover:text-blue-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          style={{ animationDelay: "0.07s" }}
        >
          Projects
        </div>
      </li>
      <li className="ml-3">
        <div
          onClick={(e) => switchPage(e.target, e.target.textContent)}
          className="bouncy text-2xl cursor-pointer hover:text-blue-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          style={{ animationDelay: "0.14s" }}
        >
          Tech
        </div>
      </li>
      <li className="ml-3">
        <div
          onClick={(e) => switchPage(e.target, e.target.textContent)}
          className="bouncy text-2xl cursor-pointer hover:text-blue-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          style={{ animationDelay: "0.21s" }}
        >
          Contact
        </div>
      </li>
    </ul>
  );
}
