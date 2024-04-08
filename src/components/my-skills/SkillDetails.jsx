import "../../css/my-skills/skill-details.css";
import { SkillCard, SkillList } from "./SkillCard";

const skills = [
    {
        skillIcon: "fa-brands fa-html5",
        skillName: "HTML 5",
        skillPercent: "95%",
        skillList: [
            ["circle-check", "Basics of HTML"],
            ["circle-check", "Emmet Abbreviation"],
            ["circle-check", "HTML Forms"],
            ["circle-check", "Semantic HTML"],
            ["circle-check", "HTML Graphics"],
        ]
    },
    {
        skillIcon: "fa-brands fa-css3-alt",
        skillName: "CSS 3",
        skillPercent: "85%",
        skillList: [
            ["circle-check", "Basics of CSS"],
            ["circle-check", "Positioning"],
            ["circle-check", "Pseudo className & Elements"],
            ["circle-check", "Combinators"],
            ["circle-check", "CSS Specifity"],
            ["circle-check", "CSS Gradient"],
            ["circle-check", "Media queries"],
            ["circle-check", "CSS Flexbox & Grid"],
        ]
    },
    {
        skillIcon: "fa-brands fa-bootstrap",
        skillName: "Bootstrap 5",
        skillPercent: "80%",
        skillList: [
            ["circle-check", "Basics of Bootstrap"],
            ["circle-check", "BS5 Layout"],
            ["circle-check", "Bootstrap 5 Grid"],
            ["circle-check", "Typography"],
            ["circle-check", "BS5 Forms"],
            ["circle-check", "BS5 Components"],
            ["circle-check", "BS5 Utilities"],
            ["circle-check", "SASS Customization"],
        ]
    },
    {
        skillIcon: "fa-brands fa-square-js",
        skillName: "Javascript",
        skillPercent: "79%",
        skillList: [
            ["circle-check", "Basics of Javascript"],
            ["circle-check", "ECMAScript 2015 (ES6)"],
            ["circle-check", "DOM Manipulation"],
            ["circle-check", "Fetch API / AJAX"],
            ["circle-check", "Event Listener"],
            ["circle-check", "Modern Javascript (ES6+)"],
            ["circle-check", "Asynchronous JS"],
            ["circle-check", "JS JSON"],
        ]
    },
    {
        skillIcon: "fa-brands fa-react",
        skillName: "React.js",
        skillPercent: "65%",
        skillList: [
            ["circle-check", "Javascript XML (JSX)"],
            ["circle-check", "className Components"],
            ["circle-check", "Functional Components"],
            ["circle-check", "State, Props"],
            ["circle-check", "React Hooks"],
            ["circle-check", "React Router"],
            ["circle-check", "Conditional Rendering"],
            // ["circle-check", "useState()"],
            // ["circle-check", "useEffect()"],
            // ["circle-check", "useRef()"],
            // ["circle-check", "useContext()"],
            // ["circle-check", "useReducer()"],
            // ["circle-check", "useMemo()"],
            // ["circle-check", "useCallback()"],
        ]
    },
    {
        skillIcon: "fa-brands fa-sass",
        skillName: "Sass",
        skillPercent: "35%",
        skillList: [
            ["circle-check", "Sass Variables"],
            ["circle-check", "Sass Nesting"],
            ["circle-check", "Sass @import"],
            ["circle-xmark", "Sass @mixin"],
            ["circle-xmark", "Sass @extend"],
            ["circle-check", "Sass List"],
            ["circle-check", "Sass Map"],
            ["circle-check", "Sass Color"],
            // ["circle-xmark", "Introspection Functions"],
        ]
    },
    {
        skillIcon: "fa-brands fa-github",
        skillName: "Git & GitHub",
        skillPercent: "85%",
        skillList: [
            ["circle-check", "Git Stage"],
            ["circle-check", "Git Commit"],
            ["circle-check", "Git Branch"],
            ["circle-check", "Pull from GitHub"],
            ["circle-check", "Push to GitHub"],
            ["circle-check", "GitHub Pages"],
            ["circle-check", "Git Clone"],
            ["circle-xmark", "GitHub Fork"],
        ]
    },
    {
        skillIcon: "fa-solid fa-gears",
        skillName: "Others Skill",
        skillPercent: "99%",
        skillList: [
            ["circle-check", "Photoshop, Illustrator"],
            ["circle-check", "UI / UX Design"],
            ["circle-check", "NPM & Yarn"],
            ["circle-check", "Deployment (Netlify)"],
            ["circle-check", "Standard Code Formatting"],
            ["circle-check", "ES Lint"],
            ["circle-check", "Prettier"],
        ]
    },
];

const SkillDetails = () => {
    return (
        <div className="skill-details">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skill-details-container">
                    {
                        skills.map((i) => (
                            <SkillCard
                                key={i.skillName}
                                skillIcon={i.skillIcon}
                                skillName={i.skillName}
                                skillPercent={i.skillPercent}
                                list={i.skillList.map((j) => (
                                    <SkillList
                                        key={j[1]}
                                        liIcon={j[0]}
                                        liItem={j[1]}
                                    />
                                ))}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export { SkillDetails, skills };

