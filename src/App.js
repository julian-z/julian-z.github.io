import './App.css';
import React, {useState} from 'react';

import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Project from './components/Project/Project';
import Experience from './components/Experience/Experience';

import Next from './next.png'
import Prev from './prev.png'

function App() {
  const [current, setCurrent] = useState(0);
  const numPages = 5;

  const handleClickNext = () => {
    if (current+1 > numPages) {
      setCurrent(0);
    }
    else {
      setCurrent(current+1);
    }
  }

  const handleClickPrev = () => {
    setCurrent(current-1);
  }

  if (current === 0) {
    return (
      <div className="App">
          <Introduction title="Introduction"></Introduction>
          <button onClick={handleClickNext}><img src={Next} alt="Next" className="next" id="introButton"></img></button>
      </div>
    );
  }
  if (current === 1) {
    return (
      <div className="App">
          <About title="About Me"></About>
          <div className="Navigation">
            <button onClick={handleClickPrev}><img src={Prev} alt="Previous" className="prev"></img></button>
            <button onClick={handleClickNext}><img src={Next} alt="Next" className="next"></img></button>
          </div>
      </div>
    );
  }
  if (current === 2) {
    return (
      <div className="App">
          <Project title="QuickYelp"
            name="quickyelp"
            github="https://github.com/julian-z/quickyelp"
            website="https://www.quickyelp.com"
            color={[191, 58, 34]}
            desc="A dynamic AI chatbot which scans the reviews and information of any business on Yelp."
            bullets={["Incorporated the LangChain framework to create 2 Facebook AI Similarity Search (FAISS) indexes of data from the Yelp Fusion API, streamlining the training process of OpenAI’s GPT-3.5.", 
                    "Integrated in-memory storage, Redis, for rate limiting, index retrieval, and automatic data expiration.",
                    "Built a functional and responsive user interface using HTML, CSS, JavaScript, and the React framework.",
                    "Successfully handling a growing number of 150+ chat sessions."]}
            stack={['python', 'html', 'css', 'javascript', 'react']}>
          </Project>
          <div className="Navigation">
            <button onClick={handleClickPrev}><img src={Prev} alt="Previous" className="prev"></img></button>
            <button onClick={handleClickNext}><img src={Next} alt="Next" className="next"></img></button>
          </div>
      </div>
    );
  }
  if (current === 3) {
    return (
      <div className="App">
          <Project title="ZotPlanner"
            name="zotplanner"
            github="https://github.com/julian-z/zotplanner"
            website="https://zotplanner.pythonanywhere.com/"
            color={[22, 173, 97]}
            desc="A UCI course search engine and graph generator which warns users about prerequisites."
            bullets={["Implemented a web-crawler to extract and categorize data from 6,000+ courses.",
                    "Enabled the construction of an inverted index, drastically reducing the runtime by 99% due to instantaneous retrieval operations.",
                    "Leveraged the tokenization abilities of the Natural Language Toolkit (NLTK) in tandem with TF-IDF scoring to accurately rank queries."]}
            stack={['python', 'html', 'css']}>
          </Project>
          <div className="Navigation">
            <button onClick={handleClickPrev}><img src={Prev} alt="Previous" className="prev"></img></button>
            <button onClick={handleClickNext}><img src={Next} alt="Next" className="next"></img></button>
          </div>
      </div>
    );
  }
  if (current === 4) {
    return (
      <div className="App">
          <Project title="Minesweeper Lab"
            name="minesweeperlab"
            github="https://github.com/julian-z/minesweeper-lab"
            website="https://github.com/julian-z/minesweeper-lab"
            color={[89, 108, 196]}
            desc="A spin-off Minesweeper game designed to train the puzzle-solving abilities of players."
            bullets={["Designed a schema for the creation of a relational database using the SQLite API, providing a means of progression tracking and a competitive environment for local players.",
                    "Implemented an auto-solving AI as a tutorial demonstration which uses pattern recognition, algorithms, and logical rules of the base Minesweeper game.",
                    "Built a fully functional Graphical User Interface (GUI) with the SDL2 library."]}
            stack={['cplusplus', 'sql']}>
          </Project>
          <div className="Navigation">
            <button onClick={handleClickPrev}><img src={Prev} alt="Previous" className="prev"></img></button>
            <button onClick={handleClickNext}><img src={Next} alt="Next" className="next"></img></button>
          </div>
      </div>
    );
  }
  if (current === 5) {
    return (
      <div className="App">
          <Experience></Experience>
          <button onClick={handleClickPrev}><img src={Prev} alt="Previous" className="prev"></img></button>
      </div>
    );
  }
}

export default App;
