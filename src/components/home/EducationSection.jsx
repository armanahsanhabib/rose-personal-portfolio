import "../../css/home/education-section.css";
import GRADUATE from "../../images/graduate.svg";

const education = [
    {
        year: "2023 - 2026 (Expected)",
        institute: "University of Global Village, Barishal.",
        degreeName: "Bachelor in Computer Science and Engineering (CSE)",
    },
    {
        year: "2019 - 2021",
        institute: "Govt. Syed Hatem Ali College, Barishal.",
        degreeName: "Associates of Science",
    },
    {
        year: "2014 - 2019",
        institute: "Bagdha Secondary School",
        degreeName: "High School Degree",
    },
    {
        year: "2008 - 2013",
        institute: "Iqra Islamic Cadet School",
        degreeName: "Elementary School",
    },
];

const Degree = (props) => {
    return (
        <div className="degree">
            <div className="year">{props.year}</div>
            <h3 className="institute">{props.institute}</h3>
            <p className="degree-name">{props.degreeName}</p>
        </div>
    );
}

const EducationSection = () => {
    return (
        <div className="education-section">
            <div className="container">
                <div className="education">
                    <h2 className="section-title">Education</h2>
                    <div className="degree-container">
                        {
                            education.map((i) => (
                                <Degree
                                    key={i.year}
                                    year={i.year}
                                    institute={i.institute}
                                    degreeName={i.degreeName}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="education-image-container">
                    <img src={GRADUATE} alt="graduate" />
                </div>
            </div>
        </div>
    );
}

export default EducationSection; 