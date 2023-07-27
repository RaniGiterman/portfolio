import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function Projects() {
  return (
    <div className="bg-cool p-10 b text-xl text-left mb-2 w-fit rounded">
      <h2 className="text-blue-600">My Projects</h2>
      <p>
        Below is a selected set of projects that I worked on before being hired.
        Click to see more.
      </p>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            {" "}
            <AnimationOnScroll animateOnce animateIn="animate__bounceIn">
              <a
                href="https://www.icmega.co.il/rani/ecom/"
                className="decoration-transparent proj"
              >
                <div className="p">
                  <h4 className="text-cool">ecommerce shop</h4>
                  <p className="text-cool">
                    A fully functional ecommerce shop.
                  </p>
                </div>
              </a>
            </AnimationOnScroll>
          </div>
          <div className="col">
            {" "}
            <AnimationOnScroll animateOnce animateIn="animate__bounceIn">
              <a
                href="https://wargraphjs.vercel.app/src/index.html"
                className="decoration-transparent proj"
              >
                <div className="p">
                  <h4 className="text-cool">WarGraph</h4>
                  <p className="text-cool">
                    Use mathematical functions in order to hit targets.
                  </p>
                </div>
              </a>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            {" "}
            <AnimationOnScroll animateOnce animateIn="animate__bounceIn">
              <a
                href="https://giterman-gambit.vercel.app/"
                className="decoration-transparent proj"
              >
                <div className="p">
                  <h4 className="text-cool">Chess</h4>
                  <p className="text-cool">
                    A fully functional chess game, with a couple of twists.
                  </p>
                </div>
              </a>
            </AnimationOnScroll>
          </div>
          <div className="col">
            {" "}
            <AnimationOnScroll animateOnce animateIn="animate__bounceIn">
              <a
                href="https://www.npmjs.com/package/argee"
                className="decoration-transparent proj"
              >
                <div className="p">
                  <h4 className="text-cool">rg</h4>
                  <p className="text-cool">
                    A NPM package built for compiling rg, my own programming
                    language
                  </p>
                </div>
              </a>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <br></br>

      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/WarGraph">WarGraph</a>
      </h5>
      <p>
        The above mathematical game "WarGraph" was built using JS, HTML and
        TailwindCSS. Enter different mathematical functions in order to hit the
        targets.
      </p>

      <h5 className="m text-blue-600">
        <a href="https://www.icmega.co.il/rani/ecom/">ecommerce shop</a>
      </h5>
      <p>
        The above ecommerce shop was built using React.js and TailwindCSS for
        the frontend, and Node.js + Express, PostgreSQL and Redis for the
        backend. I managed to data-scrape other ecommerce websites, grab
        infomation about items in their shop and present them on my own.
        Ofcourse, none of the items are actually for sale! it's only a demo
        project.
      </p>

      {/* <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/Tic-Tac-Toe">Tic Tac Toe</a>
      </h5>
      <p>
        The above Tic Tac Toe game was built using JS, HTML and CSS. I came up
        with an algorithm of depth 1 search for the computer to follow after
        each move.
      </p>
      <br></br> */}

      {/* <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/jailbreak">JailBreak</a>
      </h5>
      <p>
        The above JailBreak game was built using PIXI.js. I like game
        development a lot and I'm looking forward to make another project such
        as this one in the future.
      </p>
      <br></br> */}

      {/* <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/flappy_bird">Flappy Bird</a>
      </h5>
      <p>
        The above flappy bird game was built using PIXI.js and JS. Me and my
        brother implemented simple physics and collision one afternoon, and
        that's the result!
      </p>
      <br></br> */}

      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/chess">Chess</a>
      </h5>
      <p>
        The above chess game was written in pure JS, HTML and css. I removed
        castling, en-passant, and the awareness of a check. I'm looking forward
        to improving my chess bot.
      </p>
      {/* <br></br> */}

      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/rg">rg</a>
      </h5>
      <p>
        rg is a programming language I built and designed. The interpreter is
        written in Javascript, which might make it the slowest programming
        language in existense.
      </p>
      {/* <br></br> */}
    </div>
  );
}
