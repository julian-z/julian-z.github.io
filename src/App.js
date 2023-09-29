import './App.css';
import selfie from "./images/IMG_0186.jpg";

function App() {
  return (
    <div className="App">
        <h1>Julian Zulfikar - Under Construction</h1>
        <p>
            Hello! If you are reading this, the website is currently under construction.
            <br></br><br></br>
            To see my current portfolio (not styled to modern standards), click <a href="https://www.ics.uci.edu/~jzulfika">here</a>!
            <br></br><br></br>
            Here is a picture of me at a creek in the beautiful East Bay Area.
        </p>
        <img src={selfie} alt="Picture of Julian" height="400px"/>
    </div>
  );
}

export default App;
