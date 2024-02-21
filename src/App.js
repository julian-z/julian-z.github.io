import "./App.css";
import "./NavigationBar.css";
import React, { useState, useEffect } from "react";

import Introduction from "./components/Introduction/Introduction";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";

import Next from "./next.png";
import Prev from "./prev.png";
import logo from "./logo-black.png";
import dropdown from "./dropdown.png";

function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document.title = "Julian Zulfikar";
  }, []);

  const handleClickNext = () => {
    setCurrent(current + 1);
  };

  const handleClickPrev = () => {
    setCurrent(current - 1);
  };

  const createNavBar = (currentPage, opacity) => {
    const pages = [
      <button onClick={() => setCurrent(0)}>Introduction</button>,
      <button onClick={() => setCurrent(1)}>About</button>,
      <button onClick={() => setCurrent(2)}>Projects</button>,
      <button onClick={() => setCurrent(5)}>Experience</button>,
    ];

    if (currentPage === 0) {
      pages[0] = (
        <button onClick={() => setCurrent(0)} style={{ opacity: opacity }}>
          Introduction
        </button>
      );
    } else if (currentPage === 1) {
      pages[1] = (
        <button onClick={() => setCurrent(1)} style={{ opacity: opacity }}>
          About
        </button>
      );
    } else if (currentPage === 5) {
      pages[3] = (
        <button onClick={() => setCurrent(5)} style={{ opacity: opacity }}>
          Experience
        </button>
      );
    } else {
      pages[2] = (
        <button onClick={() => setCurrent(2)} style={{ opacity: opacity }}>
          Projects
        </button>
      );
    }

    return pages;
  };

  if (current === 0) {
    return (
      <div className="App">
        <Introduction title="Introduction"></Introduction>
        <button onClick={handleClickNext}>
          <img src={Next} alt="Next" className="next" id="introButton"></img>
        </button>

        <div className="NavigationBar">
          <img src={logo} alt="JZ" id="JZ"></img>

          <div className="NavigationOptions">
            {createNavBar(current, "0.5")}
          </div>

          <div className="NavigationDropdown">
            <button>
              <img src={dropdown} alt="Menu"></img>
            </button>
            <div className="DropdownContent">{createNavBar(current, "1")}</div>
          </div>
        </div>
      </div>
    );
  }
  if (current === 1) {
    return (
      <div className="App">
        <About title="About Me"></About>
        <div className="Navigation">
          <button onClick={handleClickPrev}>
            <img src={Prev} alt="Previous" className="prev"></img>
          </button>
          <button onClick={handleClickNext}>
            <img src={Next} alt="Next" className="next"></img>
          </button>
        </div>

        <div className="NavigationBar">
          <img src={logo} alt="JZ" id="JZ"></img>

          <div className="NavigationOptions">
            {createNavBar(current, "0.5")}
          </div>

          <div className="NavigationDropdown">
            <button>
              <img src={dropdown} alt="Menu"></img>
            </button>
            <div className="DropdownContent">{createNavBar(current, "1")}</div>
          </div>
        </div>
      </div>
    );
  }
  if (current === 2) {
    return (
      <div className="App">
        <Project
          title="(1/3) QuickYelp"
          name="quickyelp"
          github="https://github.com/julian-z/quickyelp"
          website="https://www.quickyelp.com"
          color={[0, 0, 0]}
          desc="A dynamic AI chatbot which scans the reviews and information of any business on Yelp."
          bullets={[
            "Incorporated the LangChain framework to create 2 FAISS indexes of data from the Yelp Fusion API, streamlining the training process of OpenAI’s GPT-4 model.",
            "Integrated in-memory storage, Redis, for rate limiting, index retrieval, and automatic data expiration.",
            "Built a functional and responsive user interface using HTML, CSS, JavaScript, and the React framework.",
            "Successfully handling a growing number of 250+ chat sessions in a production environment.",
          ]}
          stack={["python", "react", "html", "css", "javascript"]}
        ></Project>
        <div className="Navigation">
          <button onClick={handleClickPrev}>
            <img src={Prev} alt="Previous" className="prev"></img>
          </button>
          <button onClick={handleClickNext}>
            <img src={Next} alt="Next" className="next"></img>
          </button>
        </div>

        <div className="NavigationBar">
          <img src={logo} alt="JZ" id="JZ"></img>

          <div className="NavigationOptions">
            {createNavBar(current, "0.5")}
          </div>

          <div className="NavigationDropdown">
            <button>
              <img src={dropdown} alt="Menu"></img>
            </button>
            <div className="DropdownContent">{createNavBar(current, "1")}</div>
          </div>
        </div>
      </div>
    );
  }
  if (current === 3) {
    return (
      <div className="App">
        <Project
          title="(2/3) ZotServices"
          name="zotplanner"
          github="https://github.com/julian-z/zotservices"
          website="https://github.com/julian-z/zotservices"
          color={[0, 0, 0]}
          desc="A UCI student-based marketplace for side-hustles and services."
          bullets={[
            "Created a Django REST API for user and service information, designed a dynamic 5-page React interface populated by the API data.",
            "Designed a 3-table schema for a SQLite relational database maintaining categorical attributes, resulting in a filtering system with a response time of less than 90 ms.",
            "Collaborated within a 4-member team for UCI's WebJam 2023, presented the application to a panel of 3 professors and an audience of 110+ students.",
          ]}
          stack={["python", "react", "html", "css", "javascript"]}
        ></Project>
        <div className="Navigation">
          <button onClick={handleClickPrev}>
            <img src={Prev} alt="Previous" className="prev"></img>
          </button>
          <button onClick={handleClickNext}>
            <img src={Next} alt="Next" className="next"></img>
          </button>
        </div>

        <div className="NavigationBar">
          <img src={logo} alt="JZ" id="JZ"></img>

          <div className="NavigationOptions">
            {createNavBar(current, "0.5")}
          </div>

          <div className="NavigationDropdown">
            <button>
              <img src={dropdown} alt="Menu"></img>
            </button>
            <div className="DropdownContent">{createNavBar(current, "1")}</div>
          </div>
        </div>
      </div>
    );
  }
  if (current === 4) {
    return (
      <div className="App">
        <Project
          title="(3/3) Minesweeper Lab"
          name="minesweeperlab"
          github="https://github.com/julian-z/minesweeper-lab"
          website="https://www.youtube.com/watch?v=Fi9VODiHQNg"
          color={[0, 0, 0]}
          desc="A spin-off Minesweeper game designed to train the puzzle-solving abilities of players."
          bullets={[
            "Designed a schema for the creation of a relational database using the SQLite API, providing a means of progression tracking and a competitive environment for local players.",
            "Implemented an auto-solving AI as a tutorial demonstration which uses pattern recognition, algorithms, and logical rules of the base Minesweeper game.",
            "Built a fully functional Graphical User Interface (GUI) with the SDL2 library.",
          ]}
          stack={["cplusplus", "sql"]}
        ></Project>
        <div className="Navigation">
          <button onClick={handleClickPrev}>
            <img src={Prev} alt="Previous" className="prev"></img>
          </button>
          <button onClick={handleClickNext}>
            <img src={Next} alt="Next" className="next"></img>
          </button>
        </div>

        <div className="NavigationBar">
          <img src={logo} alt="JZ" id="JZ"></img>

          <div className="NavigationOptions">
            {createNavBar(current, "0.5")}
          </div>

          <div className="NavigationDropdown">
            <button>
              <img src={dropdown} alt="Menu"></img>
            </button>
            <div className="DropdownContent">{createNavBar(current, "1")}</div>
          </div>
        </div>
      </div>
    );
  }
  if (current === 5) {
    return (
      <div className="App">
        <Experience></Experience>
        <button onClick={handleClickPrev}>
          <img src={Prev} alt="Previous" className="prev"></img>
        </button>

        <div className="NavigationBar">
          <img src={logo} alt="JZ" id="JZ"></img>

          <div className="NavigationOptions">
            {createNavBar(current, "0.5")}
          </div>

          <div className="NavigationDropdown">
            <button>
              <img src={dropdown} alt="Menu"></img>
            </button>
            <div className="DropdownContent">{createNavBar(current, "1")}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
