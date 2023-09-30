import './App.css';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Next from './next.png'
import Prev from './prev.png'
import React, {useState} from 'react';

function App() {
  const [current, setCurrent] = useState(0);
  const nextMap = {
    0: 1,
    1: 0,
  }
  const prevMap = {
    1: 0,
  }

  const handleClickNext = () => {
    setCurrent(nextMap[current]);
  }

  const handleClickPrev = () => {
    setCurrent(prevMap[current]);
  }

  if (current == 0) {
    return (
      <div className="App">
          <Introduction title="Introduction"></Introduction>
          <button onClick={handleClickNext}><img src={Next} alt="Next" id="next"></img></button>
      </div>
    );
  }
  else if (current == 1) {
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
}

export default App;
