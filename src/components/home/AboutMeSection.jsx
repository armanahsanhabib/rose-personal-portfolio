import "../../css/home/about-me-section.css";
const RESUME = "https://drive.google.com/file/d/1Z-npoFfD9zxEP83Cd1rh_t6cp1jfAIcy/view?usp=share_link";


const AboutMeSection = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="about-me">
                    <div className="about-bio">
                        <h2 className="section-title">About me</h2>
                        <h3>I am your Honest, Qualified Frontend Developer.</h3>
                    </div>
                    <div className="txt-container">
                        <p>
                            I am Ahsan Habib, a frontend web developer with a passion for creating dynamic and engaging web experiences. My expertise lies in React, a JavaScript library for building user interfaces. I have experience in using React's component-based architecture to develop performant and maintainable code that delivers optimal user experiences. <br /><br /> I am always eager to learn new technologies and stay updated with the latest web development trends to deliver the best possible results for my clients and employer. I am confident that my skills and experience in React and frontend development make me a valuable asset to any team.
                        </p>
                        <div className="buttons">
                            <span className="btn-primary"><a href={RESUME} target="_blank" rel="noopener noreferrer">Download CV</a></span>
                            <span className="btn-secondary"><a href="https://www.youtube.com/@armanahsanhabib" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-play"></i> Play Video</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMeSection; 