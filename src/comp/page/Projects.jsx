import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function Projects() {
  return (
    <div className="bg-white p-10 b text-xl text-left mb-2 w-fit">
      <h2 className="text-blue-600">Open-Source Projects</h2>
      <p>
        Below is a selected set of projects that I worked on. Click to learn
        more.
      </p>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <AnimationOnScroll animateOnce animateIn="animate__bounceIn">
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
            </AnimationOnScroll>
          </div>
          <div className="col">
            {" "}
            <AnimationOnScroll animateOnce animateIn="animate__bounceIn">
              <a
                href="https://github.com/RaniGiterman/giterman"
                className="decoration-transparent"
              >
                <div className="p">
                  <h4>giterman</h4>
                  <p>
                    A NPM package which provides a very simple HTML template
                    engine.
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
                href="https://www.icmega.co.il/rani/ecom/"
                className="decoration-transparent"
              >
                <div className="p">
                  (not open-source)
                  <h4>ecommerce shop</h4>
                  <p>A fully functional ecommerce shop.</p>
                </div>
              </a>
            </AnimationOnScroll>
          </div>
          <div className="col">
            {" "}
            <AnimationOnScroll animateOnce animateIn="animate__bounceIn">
              <a
                href="https://wargraphjs.vercel.app/src/index.html"
                className="decoration-transparent"
              >
                <div className="p">
                  <h4>WarGraph</h4>
                  <p>Use mathematical functions in order to hit targets.</p>
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
                href="https://tic-tac-toe-rani.vercel.app/"
                className="decoration-transparent"
              >
                <div className="p">
                  <h4>Tic Tac Toe</h4>
                  <p>The classic minigame built with pure JS</p>
                </div>
              </a>
            </AnimationOnScroll>
          </div>
          <div className="col">
            {" "}
            <AnimationOnScroll animateOnce animateIn="animate__bounceIn">
              <a
                href="https://jailbreak.vercel.app/"
                className="decoration-transparent"
              >
                <div className="p">
                  <h4>JailBreak</h4>
                  <p>The classic minigame built with PIXI.js.</p>
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
                href="https://ray-traces.vercel.app/"
                className="decoration-transparent"
              >
                <div className="p">
                  <h4>Ray Traces</h4>
                  <p>
                    Hover your mouse for a cool ray tracing effect made with
                    PIXI.js.
                  </p>
                </div>
              </a>
            </AnimationOnScroll>
          </div>
          <div className="col">
            {" "}
            <AnimationOnScroll animateOnce animateIn="animate__bounceIn">
              <a
                href="https://ranibird.vercel.app/"
                className="decoration-transparent"
              >
                <div className="p">
                  <h4>Flappy Bird</h4>
                  <p>
                    The classic minigame built with PIXI.js. Tap the space-bar
                    to jump.
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
                href="https://www.npmjs.com/package/argee"
                className="decoration-transparent"
              >
                <div className="p">
                  <h4>rg</h4>
                  <p>A NPM package built for compiling rg code.</p>
                </div>
              </a>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <br></br>

      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/manipulations">
          manipulations
        </a>
      </h5>
      <p>
        The above NPM package "manipulations" was built fully using JS. As of
        this writing, the package gained a total of 1,139 downloads.
      </p>

      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/giterman">giterman</a>
      </h5>
      <p>
        The above NPM package "giterman" was built fully using JS. As of this
        writing, the package gained a total of 1,292 downloads.
      </p>

      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/WarGraph">WarGraph</a>
      </h5>
      <p>
        The above mathematical game "WarGraph" was built built using JS, HTML
        and TailwindCSS. Enter different mathematical functions in order to hit
        the targets.
      </p>

      <h5 className="m text-blue-600">
        <a href="https://www.icmega.co.il/rani/ecom/">ecommerce shop</a>
      </h5>
      <p>
        The above ecommerce shop was built using React.js and TailwindCSS for
        the frontend, and Node.js + Express, PostgreSQL and Redis for the
        backend. It is by far my most impressive project. I managed to
        data-scrape websites, grab infomation about items in their shop and
        present them on my own. Ofcourse, none of the items are actually for
        sale! it is only a demo project.
      </p>

      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/Tic-Tac-Toe">Tic Tac Toe</a>
      </h5>
      <p>
        The above Tic Tac Toe game was built using JS, HTML and CSS. I came up
        with an algorithm of depth 1 search for the computer to follow after
        each move. I recommend running the site through a computer, as I didn't
        bother to make it responsive.
      </p>
      <br></br>

      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/jailbreak">JailBreak</a>
      </h5>
      <p>
        The above JailBreak game was built using PIXI.js. I like game
        development a lot and I'm looking forward to make another project such
        as this one in the future.
      </p>
      <br></br>

      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/flappy_bird">Flappy Bird</a>
      </h5>
      <p>
        The above flappy bird game was built using PIXI.js and JS. Me and my
        brother implemented simple physics and collision one afternoon, and
        that's the result!
      </p>
      <br></br>

      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/ray_traces">Ray Tracing</a>
      </h5>
      <p>
        The above Ray Tracing effect was made using PIXI.js and JS. I used basic
        maths I learned in school in order to find each of the linear equations
        in 360 degrees of the mouse's X and Y, on every mouse-move.
      </p>
      <br></br>

      <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/rg">rg</a>
      </h5>
      <p>
        rg is a programming language I built and designed. The interpreter is
        written in Javascript, which might make it the slowest programming
        language in existense.
      </p>
      <br></br>
    </div>
  );
}
