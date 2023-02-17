import React from "react";

export default function Header() {
  return (
    <h1 className="relative f">
      <span className="absolute text-left text-6xl left-1">Rani Giterman,</span>
      <div className="float-right ml-12">
        <img src="Israel.png" className="w-24" alt="Israel Flag" />
      </div>
      <div className="absolute left-2 top-28 sm:top-14 text-left text-2xl">
        Aspiring Engineer.
      </div>
    </h1>
  );
}
