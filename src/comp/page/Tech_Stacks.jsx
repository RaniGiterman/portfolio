import React from "react";

export default function Tech_Stacks() {
  return (
    <div className="bg-white p-10 b text-xl text-left w-full">
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
              <li className="m">TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="text-blue-600">Personal Preference</h2>
      <p>
        After a while of playing around with different technologies, I decided
        to settle down on React as my main frontend web framework. My go-to
        backend decision was Node.js as I loved the idea of having the same
        language in both the frontend and backend.
      </p>
    </div>
  );
}
