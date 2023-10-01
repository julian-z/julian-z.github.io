import './Project.css';
import python from './python.png';
import cplusplus from './cplusplus.png';
import javascript from './javascript.png';
import html from './html.png';
import css from './css.png';
import react from './react.png';
import sql from './sql.png';
import quickyelp from './quickyelp.png';
import zotplanner from './zotplanner.png';
import minesweeperlab from './minesweeperlab.png';

function Project(props) {
    const stackLogos = {
        'python': <img src={python} className='tech' alt='Python'></img>,
        'cplusplus': <img src={cplusplus} className='tech' alt='C++'></img>,
        'javascript': <img src={javascript} className='tech' alt='JavaScript'></img>,
        'html': <img src={html} className='tech' alt='HTML'></img>,
        'css': <img src={css} className='tech' alt='CSS'></img>,
        'react': <img src={react} className='tech' alt='React'></img>,
        'sql': <img src={sql} className='tech' alt='SQL'></img>,
    }

    const projectLogos = {
        'quickyelp': <a href={props.website} target="_blank"><img src={quickyelp} className='preview' alt='QuickYelp'></img></a>,
        'zotplanner': <a href={props.website} target="_blank"><img src={zotplanner} className='preview' alt='ZotPlanner'></img></a>,
        'minesweeperlab': <a href={props.website} target="_blank"><img src={minesweeperlab} className='preview' alt='Minesweeper Lab'></img></a>,
    }
    return (
        <div className="container">
            <div className="Header project" style={{background: `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`}}>
                <div>
                    {props.title}
                </div>
                <div>
                    <a href={props.github} target="_blank">GitHub</a> | <a href={props.website} target="_blank">Website</a>
                </div>
            </div>
            <div className="Project">
                {projectLogos[props.name]}

                <div className="description">
                    <div className="desc">
                        {props.desc}
                    </div>

                    <div className="bullets">
                        <ul>
                            {props.bullets.map((bullet) => (
                                <li>{bullet}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="tech-row proj">
                        {props.stack.map((tech) => {
                            return stackLogos[tech];
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
