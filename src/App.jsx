import { useState, useRef } from "react";
import "./index.css";
import Header from "./comp/Header";
import Navbar from "./comp/Navbar";
import WhichPage from "./comp/WhichPage";
import End from "./comp/End";

let lastElem;
function App() {
  let [page, setPage] = useState("Home");
  let home = useRef();

  function switchPage(elem, newPage) {
    setPage(newPage);
    if (lastElem == elem) return;
    elem.classList.add("scale-110");
    elem.classList.add("-translate-y-1");
    elem.classList.add("text-blue-600");
    if (lastElem) {
      lastElem.classList.remove("scale-110");
      lastElem.classList.remove("-translate-y-1");
      lastElem.classList.remove("text-blue-600");
    } else {
      // lastElem is home (start)
      if (newPage == "Home") return; // making sure Home is not being clicked again

      home.current.classList.remove("scale-110");
      home.current.classList.remove("-translate-y-1");
      home.current.classList.remove("text-blue-600");
    }
    lastElem = elem;
  }
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      ></script>

      <div className="container-fluid text-center cool ">
        <div className="row">
          <div className="col-xxl-3"></div>
          <div className="col-xxl-6 -ml-4 relative f2">
            <Header />
            <div className="absolute top-40 sm:top-32 ml-1">
              <Navbar switchPage={switchPage} home={home} />
            </div>

            <div className="absolute top-48 sm:top-40 ml-2.5">
              <WhichPage page={page} />
            </div>
            {/* <div className="fixed bottom-0 left-0 right-0">
              <End />
            </div> */}
          </div>
          <div className="col-xxl-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
