import "../../css/common-css/hero-secondary.css";

const HeroSecondary = (props) => {
    return (
        <div className="hero-secondary">
            <div className="container">
                <h1>{props.PageTitle}</h1>
                <p>{props.Path}</p>
            </div>
        </div>
    );
}

export default HeroSecondary; 