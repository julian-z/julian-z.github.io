import './Introduction.css';
import pic from './IMG_0186.jpg';
import github from './github.png';
import linkedin from './linkedin.png';
import mail from './mail.png';

function Introduction(props) {
    return (
        <div className="container">
            <div className="Header intro">
                {props.title}
            </div>
            <div className="Introduction">
                <img src={pic} id='pic' alt="Picture of Julian Zulfikar"></img>
                <div className="allText">
                    <div className="nameText">Hello! I am</div>
                    <div className="fullName">Julian Zulfikar</div>
                    <div className="roleText">Computer Science @ UCI</div>
                </div>
                <div className="Socials">
                    <a href="https://github.com/julian-z" target="_blank"><img src={github} className="social" alt="GitHub"></img></a>
                    <a href="https://www.linkedin.com/in/julian-z/" target="_blank"><img src={linkedin} className="social" alt="LinkedIn"></img></a>
                    <a href="mailto:jzulfika@uci.edu" target="_blank"><img src={mail} className="social" alt="Email"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
