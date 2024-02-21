import "./Experience.css";
import UCI from "./uci.png";
import ZotMe from "./ZotMe.png";
import GBCS from "./gbcs.png";
import Cisco from "./cisco.png";

function Experience() {
  return (
    <div className="container">
      <div className="Header experience">Work Experience</div>
      <div className="Experience">
        <div className="section">
          <img src={Cisco} alt="Cisco" className="experiencePic"></img>
          <div>
            <div className="experienceTitle">Software Engineer Intern</div>
            <div className="experienceCompany">Cisco</div>
            <div className="experienceBullets">
              <ul id="experienceUL">
                <li>
                  Incoming Software Engineer Intern for Summer 2024, Mass
                  Infrastructure Group (MIG)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section">
          <img src={GBCS} alt="GBCS Group" className="experiencePic"></img>
          <div>
            <div className="experienceTitle">Software Developer Intern</div>
            <div className="experienceCompany">GBCS Group</div>
            <div className="experienceBullets">
              <ul id="experienceUL">
                <li>
                  Revived a discontinued vendor system project as the sole
                  full-stack developer within a 5-member Scrum team.
                </li>
                <li>
                  Implemented login authentication, password reset emails, and
                  profile customization for 240+ users and 28 employees.
                </li>
                <li>
                  Increased codebase modularity 32% by connecting 2 API
                  interfaces to integrate the vendor system with the company's
                  current infrastructure, enabled communication between vendors
                  and clients within 14+ companies.
                </li>
                <li>
                  Utilized Python, Django, MySQL, React, JavaScript, Microsoft
                  Azure, and Postman.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section">
          <img src={UCI} alt="UCI" className="experiencePic"></img>
          <div>
            <div className="experienceTitle">
              Undergraduate Learning Assistant
            </div>
            <div className="experienceCompany">
              University of California, Irvine
            </div>
            <div className="experienceBullets">
              <ul id="experienceUL">
                <li>
                  Mentored 220+ students within a 15-member team in building a
                  strong foundation of object-oriented programming.
                </li>
                <li>
                  Conducted office hours (3 hours/week) to deliver guidance for
                  debugging Python assignments.
                </li>
                <li>
                  Graded 8 formative assessments for 10-12 students, providing
                  personalized feedback to gauge comprehension.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
