import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Projects() {
  return (
    <div className="bg-cool p-10 b text-xl mb-2 w-fit rounded">
      <div className="text-left">
        <h2 className="text-blue-600">My Projects</h2>
        <p>
          The following is a selected set of projects that I worked on before
          being hired. Click to see more.
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
                      fully functional ecommerce shop.
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
                    <p className="text-cool">Math-based target shooter game</p>
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
                      functional chess game, with a couple of twists.
                    </p>
                  </div>
                </a>
              </AnimationOnScroll>
            </div>
            <div className="col">
              {" "}
              <AnimationOnScroll animateOnce animateIn="animate__bounceIn">
                <a
                  href="https://rg-playground.vercel.app/"
                  className="decoration-transparent proj"
                >
                  <div className="p">
                    <h4 className="text-cool">rg-playground</h4>
                    <p className="text-cool">
                      site built for coding rg, my own programming language
                    </p>
                    <p></p>
                  </div>
                </a>
              </AnimationOnScroll>
            </div>
          </div>
        </div>

        <hr />

        <h2 className="text-blue-600">Keyboards</h2>
        <p>
          I like building and using split ergononic keyboards. Check out some of
          them below.
        </p>
        <Carousel showArrows={true}>
          <div>
            <img src="corne.jpg" alt="corne keyboard" />
            <p className="legend">
              My first handbuilt keyboard, the Corne keyboard.
            </p>
          </div>
          <div>
            <img src="dad_corne.jpg" alt="dad's corne keyboard" />
            <p className="legend">
              My dad really liked the Corne, so we built another one for him.
            </p>
          </div>
          <div>
            <img src="ferris.jpg" alt="ferris keyboard" />
            <p className="legend">
              That's the revolution of Corne for me, the Ferris Sweep keyboard.
            </p>
          </div>
          <div>
            <img src="kinesis.jpg" alt="kinesis advantage360 keyboard" />
            <p className="legend">
              The Kinesis Advantage360 keyboard is the most comfortable for me.
            </p>
          </div>
        </Carousel>

        {/* <br></br>

        <h5 className="m text-blue-600">
          <a href="https://github.com/RaniGiterman/WarGraph">WarGraph</a>
        </h5>
        <p>
          The above mathematical game "WarGraph" was built using JS, HTML and
          TailwindCSS. Write equations to hit targets and test your math skills!
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
      <br></br>

        {/* <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/jailbreak">JailBreak</a>
      </h5>
      <p>
        The above JailBreak game was built using PIXI.js. I like game
        development a lot and I'm looking forward to make another project such
        as this one in the future.
      </p>
      <br></br>

        {/* <h5 className="m text-blue-600">
        <a href="https://github.com/RaniGiterman/flappy_bird">Flappy Bird</a>
      </h5>
      <p>
        The above flappy bird game was built using PIXI.js and JS. Me and my
        brother implemented simple physics and collision one afternoon, and
        that's the result!
      </p>
      <br></br>

        <h5 className="m text-blue-600">
          <a href="https://github.com/RaniGiterman/chess">Chess</a>
        </h5>
        <p>
          The above chess game was written in pure JS, HTML and css. I removed
          castling, en-passant, and the awareness of a check. I'm looking
          forward to improving my chess bot.
        </p>
        {/* <br></br>

        <h5 className="m text-blue-600">
          <a href="https://github.com/RaniGiterman/rg-playground">rg</a>
        </h5>
        <p>
          rg is a programming language I built and designed. The interpreter is
          written in Javascript, which might make it the slowest programming
          language in existense.
        </p>
        {/* <br></br>*/}
      </div>{" "}
    </div>
  );
}
