import React from "react";

export default function Projects() {
  return (
    <div className="bg-white p-10 b text-xl text-left mb-2">
      <h2 className="text-blue-600">Open-Source Projects</h2>
      <p>
        Below is a selected set of projects that I contributed to the community.
        Click to learn more.
      </p>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <a
              href="https://github.com/RaniGiterman/manipulations"
              className="decoration-transparent"
            >
              <div className="p">
                <h4>manipulations</h4>
                <p>
                  A NPM package to make your life as a developer even easier.
                </p>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              href="https://github.com/RaniGiterman/chess"
              className="decoration-transparent"
            >
              <div className="p">
                <h4>chess</h4>
                <p>
                  A fairly simple, minimalistic chess game. Supported FEN
                  notation.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://www.icmega.co.il/rani/ecom/"
        className="decoration-transparent"
      >
        <div className="p">
          (Not open-source)
          <h4>ecommerce shop</h4>
          <p>A fully functional ecommerce shop.</p>
        </div>
      </a>

      <br></br>
      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/manipulations">
          manipulations
        </a>
      </h5>
      <p>
        The above manipulations NPM package was built fully using JS. As of this
        writing, the package gained 377 downloads.
      </p>
      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/chess">chess</a>
      </h5>
      <p>
        The above chess game was built using vanilla HTML, CSS and JS. This
        project is special for me as I'm a great fan of chess. The board
        supports any{" "}
        <a href="https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation">
          FEN
        </a>{" "}
        position.
      </p>
      <h5 className="m text-blue-600">
        <a href="https://www.icmega.co.il/rani/ecom/">ecommerce shop</a>
      </h5>
      <p>
        The above ecommerce shop is being built using React.js and TailwindCSS
        for the frontend, and Node.js + Express, PostgreSQL and Redis for the
        backend. It is by far my most impressive project.
      </p>
      <br></br>
      <p>
        As of today, I've developed various projects, such as expanding a To-Do
        List project so it'll save each user's notes and their data, an online
        (messages delievring at real-time) chat, a complete Tinder clone, a
        online pong game and more...
      </p>
    </div>
  );
}
