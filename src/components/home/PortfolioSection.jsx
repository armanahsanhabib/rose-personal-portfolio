import "../../css/home/portfolio-section.css";
import student_portal from "../../images/Student portal dashboard.png";
import barishalboard from "../../images/barishalboard.png";
import first_portfolio from "../../images/my first portfolio showcase2.png";
import arman_ahsan_habib from "../../images/my personal website.png";
import arman_ahsan_habib2 from "../../images/portfolio-project.jpg";
import tic_tac_toe from "../../images/tic-tac-toe showcase.png";

const PortfolioCard = (props) => {
    return (
        <div className="portfolio-card">
            <div className="img-container">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={props.image} alt="portfolio website" />
                </a>
            </div>
            <div className="buttons">
                <div className="btn-primary">
                    <a href={props.liveLink} target="_blank" rel="noopener noreferrer">Live View</a>
                </div>
                <div className="btn-secondary">
                    <a href={props.githubLink} target="_blank" rel="noopener noreferrer">Details</a>
                </div>
            </div>
        </div>
    );
}

const PortfolioSection = () => {
    return (
        <div className="portfolio-section">
            <div className="container">
                <div className="top-section">
                    <h2 className="section-title">My Portfolio</h2>
                </div>
                <div className="portfolio-container">
                    <PortfolioCard
                        image={student_portal}
                        liveLink="https://armanahsanhabib.github.io/student-portal/"
                        githubLink="https://github.com/armanahsanhabib/student-portal"
                    />
                    <PortfolioCard
                        image={tic_tac_toe}
                        liveLink="https://armanahsanhabib.github.io/tic-tac-toe/"
                        githubLink="https://github.com/armanahsanhabib/tic-tac-toe"
                    />
                    <PortfolioCard
                        image={arman_ahsan_habib}
                        liveLink="https://armanahsanhabib.com/"
                        githubLink="https://github.com/armanahsanhabib/my-personal-website"
                    />
                    <PortfolioCard
                        image={arman_ahsan_habib2}
                        liveLink="https://armanahsanhabib.com/"
                        githubLink="https://github.com/armanahsanhabib/my-personal-website"
                    />
                    <PortfolioCard
                        image={first_portfolio}
                        liveLink="https://armanahsanhabib.github.io/myfirstportfolio/"
                        githubLink="https://github.com/armanahsanhabib/myfirstportfolio"
                    />
                    <PortfolioCard
                        image={barishalboard}
                        liveLink="https://armanahsanhabib.github.io/barishalboardresult/"
                        githubLink="https://github.com/armanahsanhabib/barishalboardresult"
                    />
                </div>
            </div>
        </div>
    );
}

export default PortfolioSection; 