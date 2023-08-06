import React from "react";

export default function Tech_Stacks() {
  return (
    <div className="bg-cool p-10 b text-xl text-left w-full rounded">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col">
            <h2 className="text-blue-600">Databases</h2>
            <ul>
              <li className="m">MSSQL</li>
              <li className="m">PostgreSQL</li>
              <li className="m">Redis</li>
            </ul>
          </div>
          <div className="col">
            <h2 className="text-blue-600">Frameworks</h2>
            <ul>
              <li className="m">React.js</li>
              <li className="m">Svelte.js</li>
              <li className="m">PIXI.js</li>
              <li className="m">TailwindCSS</li>
              <li className="m">Bootstrap</li>
              <li className="m">Chart.js</li>
              <li className="m">Node.js</li>
              <li className="m">Express</li>
              <li className="m">GoFiber</li>
              <li className="m">Prometheus</li>
              <li className="m">Grafana</li>
              <li className="m">gRPC</li>
              <li className="m">Docker</li>
            </ul>
          </div>
          <div className="col">
            <h2 className="text-blue-600">Languages</h2>
            <ul>
              <li className="m">HTML/CSS/JS</li>
              <li className="m">Golang</li>
              <li className="m">Python</li>
              <li className="m">Java</li>
              <li className="m">C</li>
              <li className="m">HAProxy</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <h2 className="text-blue-600">Personal Preference</h2> */}
      <br />
      <p className=" text-sm">
        operating systems: Windows, MacOS, Pop!_OS (ubuntu linux)
      </p>
      <hr />
      <p>
        I go by the saying <i>"pick the right tool for the job"</i>. In that
        light, I frequently try to expand my views and learn about different
        packages, frameworks, languages and technologies in order to be able to
        use the most suited options when they are needed.
        {/* I believe that it's important to pick the right tool for the job, so I
        like to expand my views and learn about different packages, frameworks,
        and languages in order to be able to use the most suited one when it's
        needed. */}
      </p>
    </div>
  );
}
