import './App.css';
import React, {useState} from 'react';

import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Project from './components/Project/Project';

import Next from './next.png'
import Prev from './prev.png'

function App() {
  const [current, setCurrent] = useState(0);
  const numPages = 2;

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
          <button onClick={handleClickNext}><img src={Next} alt="Next" id="next"></img></button>
      </div>
    );
  }
  if (current === 1) {
    return (
      <div className="App">
          <About title="About Me"></About>
          <div className="Navigation">
            <button onClick={handleClickPrev}><img src={Prev} alt="Previous" id="prev"></img></button>
            <button onClick={handleClickNext}><img src={Next} alt="Next" id="next"></img></button>
          </div>
      </div>
    );
  }
  if (current === 2) {
    return (
      <div className="App">
          <Project title="QuickYelp - AI Chatbot"
            name="quickyelp"
            github="https://github.com/julian-z/quickyelp"
            website="https://www.quickyelp.com"
            color={[191, 58, 34]}
            desc="A dynamic AI chatbot which scans the reviews and information of any business on Yelp."
            bullets={["Incorporated the LangChain framework to dynamically create 2 Facebook AI Similarity Search (FAISS) indexes of data from the Yelp Fusion API, streamlining the training process of OpenAI’s GPT-3.5 large language model.", 
                    "Enhanced user session security by integrating in-memory storage, Redis, for rate limiting, index retrieval, and automatic data expiration, ultimately allowing for the support of up to 40 businesses concurrently.",
                    "Built a functional and responsive user interface using HTML, CSS, JavaScript, and the React framework.",
                    "Successfully handling a growing number of 150+ chat sessions."]}
            stack={['python', 'javascript', 'html', 'css', 'react']}>
          </Project>
          <div className="Navigation">
            <button onClick={handleClickPrev}><img src={Prev} alt="Previous" id="prev"></img></button>
            <button onClick={handleClickNext}><img src={Next} alt="Next" id="next"></img></button>
          </div>
      </div>
    );
  }
}

export default App;
