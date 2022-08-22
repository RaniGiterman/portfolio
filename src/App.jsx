import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import "./index.css";
import Header from "./comp/Header";
import Navbar from "./comp/Navbar";
import WhichPage from "./comp/WhichPage";
import End from "./comp/End";

let lastElem;
function App() {
  let [page, setPage] = useState("Home");
  let home = useRef();
  let pageParent = useRef();

  function switchPage(elem, newPage) {
    handleAnimation(newPage);

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

  function handleAnimation(newPage) {
    disappear();
    setTimeout(() => {
      setPage(newPage);
      appear();
    }, 100);
  }

  function disappear() {
    let count = 1;
    let x = setInterval(() => {
      if (count <= 0.1) return clearInterval(x);
      count -= 0.1;
      pageParent.current.style.opacity = count;
    }, 10);
  }

  function appear(params) {
    let count = 0.1;
    let x = setInterval(() => {
      if (count >= 1) return clearInterval(x);
      count += 0.1;
      pageParent.current.style.opacity = count;
    }, 10);
  }

  return (
    <div>
      <Helmet>
        <title>Rani Giterman</title>
        <link rel="icon" href="/star.ico" />
      </Helmet>

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

      <div className="container-fluid text-center cool">
        <div className="row">
          <div className="col-xxl-3"></div>
          <div className="col-xxl-6 -ml-4 relative f2">
            <Header />
            <div className="absolute top-40 sm:top-32 ml-1">
              <Navbar switchPage={switchPage} home={home} />
            </div>

            <div className="absolute sm:top-40 top-48 ml-2.5" ref={pageParent}>
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
