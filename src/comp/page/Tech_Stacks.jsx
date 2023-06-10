import React from "react";

export default function Tech_Stacks() {
  return (
    <div className="bg-cool p-10 b text-xl text-left w-full">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col">
            <h2 className="text-blue-600">Backend</h2>
            <ul>
              <li className="m">Node.js</li>
              <li className="m">Express</li>
              <li className="m">MSSQL</li>
              <li className="m">PostgreSQL</li>
              <li className="m">Redis</li>
              <li className="m">Golang</li>
              <li className="m">Prometheus</li>
              <li className="m">Grafana</li>
            </ul>
          </div>
          <div className="col">
            <h2 className="text-blue-600">Frontend</h2>
            <ul>
              <li className="m">HTML</li>
              <li className="m">CSS</li>
              <li className="m">JS</li>
              <li className="m">React.js</li>
              <li className="m">Svelte.js</li>
              <li className="m">PIXI.js</li>
              <li className="m">TailwindCSS</li>
              <li className="m">Bootstrap</li>
              <li className="m">Chart.js</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h2 className="text-blue-600">Other</h2>
            <ul>
              <li className="m">Java</li>
              <li className="m">Docker</li>
              <li className="m">gRPC</li>
              <li className="m">HAProxy</li>
            </ul>
          </div>
          <div className="col"></div>
        </div>
      </div>

      {/* <h2 className="text-blue-600">Personal Preference</h2> */}
      <hr />
      <p>
        I believe that it's important to pick the right tool for the job, so I
        like to expand my views and learn about different packages, frameworks,
        and languages in order to be able to use the most suited one when it's
        needed.
      </p>
    </div>
  );
}
