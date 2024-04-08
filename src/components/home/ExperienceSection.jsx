import "../../css/home/experience-section.css";
import JOB from "../../images/job.svg";

const experience = [
    {
        year: "2023 - Present",
        company: "Upwork.com",
        jobTitle: "Freelance Frontend Developer"
    },
    {
        year: "2020 - 2022",
        company: "10MinuteSchool.com",
        jobTitle: "Frontend Developer, Infographer, Typist",

        /* jobTitle: `I worked for Robi 10 Minute School 
        as a Web Designer and Front-End Web Developer remotely. 
        I learned a bunch of skill sets during my journey 
        with this Largest Edtech company in Bangladesh. 
        I learned to solve problems and project management. 
        I find myself happy solving problems and keep trying 
        to make them user-friendly` */
    },
];

const Job = (props) => {
    return (
        <div className="job">
            <div className="year">{props.year}</div>
            <h3 className="company">{props.company}</h3>
            <p className="job-name">{props.jobName}</p>
        </div>
    );
}

const ExperienceSection = () => {
    return (
        <div className="experience-section">
            <div className="container">
                <div className="experience">
                    <h2 className="section-title">Work Experience</h2>
                    <div className="experience-container">
                        {
                            experience.map((i) => (
                                <Job
                                    key={i.year}
                                    year={i.year}
                                    company={i.company}
                                    jobName={i.jobTitle}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="experience-image-container">
                    <img src={JOB} alt="job" />
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection; 