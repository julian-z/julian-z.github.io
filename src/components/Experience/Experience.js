import './Experience.css';
import UCI from './uci.png';
import ZotMe from './ZotMe.png';

function Experience() {
    return (
        <div className="container">
            <div className="Header experience">
                Experience & Activities
            </div>
            <div className="Experience">
                <div className="section">
                    <img src={UCI} alt="UCI" className="experiencePic"></img>
                    <div>
                        <div className="experienceTitle">
                            Python Learning Assistant (ICS 31)
                        </div>
                        <div className="experienceBullets">
                            <ul id="experienceUL">
                                <li>Supported 430+ students across 2 lecture sections in building a strong foundation of object-oriented programming.</li>
                                <li>Conducted office hours (4 hours/week) to deliver guidance for students working on Python programming assignments, encouraging the development of effective debugging and problem-solving techniques.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <img src={ZotMe} alt="ZotMe" className="experiencePic"></img>
                    <div>
                        <div className="experienceTitle">
                            UCI Mental Health Hackathon (UI Design)
                        </div>
                        <div className="experienceBullets">
                            <ul id="experienceUL">
                                <li>Collaborated as a vital member of a 5-person team to conceptualize and pitch ZotMe, a college-based social media application focusing on friend and club-seeking activities to combat mental health issues caused by loneliness.</li>
                                <li>Engaged in the thorough UI/UX design process, actively crafting 2 intuitive and engaging iOS/Android interface mock-ups.</li>
                                <li>Presented the application to an audience of over 125 students and 5 judges, ultimately securing a funding boost of $1,000.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
