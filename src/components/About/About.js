import './About.css';
import python from './python.png';
import cplusplus from './cplusplus.png';
import javascript from './javascript.png';
import html from './html.png';
import css from './css.png';
import react from './react.png';

function About(props) {
    return (
        <div className="container">
            <div className="Header about">
                {props.title}
            </div>
            <div className="About">
                <div className="quote">
                    "We don't make mistakes, only teachable moments." [Alex Thornton]
                </div>

                <div className="summary">
                    Hello! I am Julian Zulfikar, a current undergraduate student studying Computer Science at
                    the University of California, Irvine! I am an aspiring Software Engineer looking for opportunities
                    revolving around full-stack web development.
                </div>
                
                <div className="summary">
                    My main driving factor which keeps me wanting to pursue this field is the idea of being able to create
                    and contribute to software that will be utilized by others, especially those that help solve problems
                    in society. I am always looking to develop projects that will assist the daily lives of individuals, as I am
                    extremely passionate about using my skillset for good. I will forever enjoy learning, creating, and problem-solving.
                </div>

                <div className="tech-stack">
                    <img src={python} className='tech' alt='Python'></img>
                    <img src={cplusplus} className='tech' alt='C++'></img>
                    <img src={javascript} className='tech' alt='JavaScript'></img>
                    <img src={html} className='tech' alt='HTML'></img>
                    <img src={css} className='tech' alt='CSS'></img>
                    <img src={react} className='tech' alt='React'></img>
                </div>
            </div>
        </div>
    )
}

export default About;
