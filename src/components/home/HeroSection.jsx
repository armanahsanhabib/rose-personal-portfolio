import "../../css/home/hero-section.css";
import AVATAR from "../../images/profileimage.png";
// import RESUME from "../../assets/Ahsan Habib Resume.pdf";
const RESUME = "https://drive.google.com/file/d/1Z-npoFfD9zxEP83Cd1rh_t6cp1jfAIcy/view?usp=share_link";

const HeroSection = () => {
    return (
        <div className="hero-main">
            <div className="container">
                <div className="txt-area">
                    <div className="title-txt">
                        Thank you for visiting my website.
                    </div>
                    <h1>
                        It's me, Ahsan Habib.
                    </h1>
                    <h3>
                        I'm a <span id="typing-txt">Frontend React Developer</span>
                    </h3>
                    <p>
                        Let me be your Honest, Qualified Frontend Developer Partner.
                    </p>
                    <div className="buttons">
                        <span className="btn-primary"><a href={RESUME} target="_blank" rel="noopener noreferrer">DOWNLOAD CV</a></span>
                        <span className="btn-secondary"><a href="https://www.youtube.com/@armanahsanhabib" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-play"></i> Play Video</a></span>
                    </div>
                </div>
                <div className="img-area">
                    <img src={AVATAR} alt="AvatarImage" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection; 