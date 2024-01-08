import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function Tech_Stacks() {
  return (
    <div className="bg-cool p-10 b text-xl text-left w-full rounded">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <h2 className="tech-title text-blue-600">Databases</h2>
            <ul>
              <li className="m W">MSSQL</li>
              <li className="m W">PostgreSQL</li>
              <li className="m W">Redis</li>
              <li className="m mid">SQLite</li>
              <li className="m L">Memcached</li>
            </ul>
          </div>
          <div>
            <h2 className="tech-title text-blue-600">Operating Systems</h2>
            <ul>
              <li className="m W">Pop!_OS (ubuntu)</li>
              <li className="m W">Kali</li>
              <li className="m mid">Windows</li>
              <li className="m L">MacOS</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <h2 className="tech-title text-blue-600">High Level</h2>
            <ul>
              <li className="m W">HTML/CSS/JS</li>
              <li className="m W">Python</li>
              <li className="m W">Java</li>
            </ul>
          </div>
          <div>
            <h2 className="tech-title text-blue-600">Proxy</h2>
            <ul>
              <li className="m W">HAProxy</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <h2 className="tech-title text-blue-600">Frameworks</h2>
            <ul>
              <li className="m W">React.js</li>
              <li className="m W">Node.js</li>
              <li className="m W">Express</li>
              <li className="m W">GoFiber</li>
              <li className="m W">TailwindCSS</li>
              <li className="m W">Bootstrap</li>
              <li className="m W">QMK</li>
              <li className="m mid">Svelte.js</li>
              <li className="m mid">PIXI.js</li>
              <li className="m mid">Chart.js</li>
              <li className="m mid">gRPC</li>
            </ul>
          </div>
          <div>
            <h2 className="tech-title text-blue-600">Containers</h2>
            <ul>
              <li className="m mid">Kubernetes</li>
              <li className="m W">Docker</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <h2 className="tech-title text-blue-600">Low Level</h2>
            <ul>
              <li className="m W">Golang</li>
              <li className="m mid">Rust</li>
              <li className="m mid">C/C++</li>
            </ul>
          </div>
          <div>
            <h2 className="tech-title text-blue-600">Tools</h2>
            <ul>
              <li className="m W">WireShark</li>
              <li className="m W">Git</li>
              <li className="m W">Prometheus</li>
              <li className="m W">Grafana</li>
              <li className="m mid">Kibana</li>
              <li className="m mid">Jaeger</li>
            </ul>
          </div>
        </div>
      </div>

      <br />
      <p className="text-sm">
        <strong className="m W">Green (Very Confident)</strong>
        <br />
        <strong className="m mid">Orange (Intermediate/In-between)</strong>
        <br />
        <strong className="m L">Red (Not Really Confident)</strong>
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
