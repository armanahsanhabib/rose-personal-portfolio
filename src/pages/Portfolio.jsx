import HeroSecondary from "../components/common-components/HeroSecondary";
import PortfolioSection from "../components/home/PortfolioSection";

const Portfolio = () => {
    return (
        <main>
            <HeroSecondary
                PageTitle="My Portfolio Items"
                Path="Home | Portfolio"
            />
            <PortfolioSection />
        </main>
    );
}

export default Portfolio; 