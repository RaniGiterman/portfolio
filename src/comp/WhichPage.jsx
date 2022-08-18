import React from "react";
import Home from "./page/Home";
import Projects from "./page/Projects";
import Contact from "./page/Contact";
import Tech_Stacks from "./page/Tech_Stacks";
import End from "./End";

export default function WhichPage({ page }) {
  switch (page) {
    case "Home":
      return (
        <div>
          <Home /> <End />
        </div>
      );
    case "Projects":
      return (
        <div>
          <Projects /> <End />
        </div>
      );
    case "Tech":
      return (
        <div>
          <Tech_Stacks /> <End />
        </div>
      );
    case "Contact":
      return (
        <div>
          <Contact /> <End />
        </div>
      );
    default:
      break;
  }
}
