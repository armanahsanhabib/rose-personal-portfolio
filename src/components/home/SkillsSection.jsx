import { Link } from "react-router-dom";
import "../../css/home/skills-section.css";
import SkilledMan from "../../images/skilled-man.svg";
import { SkillCard } from "../my-skills/SkillCard";
import { skills } from "../my-skills/SkillDetails";

const SkillsSection = () => {
    return (
        <div className="skills-section">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-box">
                    <div className="skill-card-container">
                        {
                            skills.map((i) => (
                                <SkillCard
                                    key={i.skillName}
                                    skillIcon={i.skillIcon}
                                    skillName={i.skillName}
                                    skillPercent={i.skillPercent}
                                />
                            ))
                        }
                        <div className="btn-primary"><Link to="/myskills" target="_blank"> View Details </Link></div>
                    </div>
                    <div className="image-area">
                        <img src={SkilledMan} alt="skill" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsSection; 