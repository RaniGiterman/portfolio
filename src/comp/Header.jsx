import React from "react";

export default function Header() {
  return (
    <h1 className="relative f">
      <span className="absolute text-left text-6xl left-1">Rani Giterman,</span>
      <div className="float-right ml-12">
        <img src="Israel.png" className="w-24" alt="Israel Flag" />
      </div>
      <div className="absolute left-2 top-28 sm:top-14 text-left text-xl sm:text-2xl">
        {/* Aspiring Engineer. */}
        Full Stack Engineer @{" "}
        <a href="https://www.icmega.co.il/home/">ICMega</a>.
        {/* Unemployed @{" "} */}
        {/* <a href="https://www.idf.il/">IDF</a>. */}
        {/* Overqualified Beer Enjoyer */}
      </div>
    </h1>
  );
}
