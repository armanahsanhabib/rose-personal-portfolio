import HeroSecondary from "../components/common-components/HeroSecondary";
import TutorialSection from "../components/tutorials/TutorialSection";

const Tutorials = () => {
    return (
        <main>
            <HeroSecondary
                PageTitle="My Tutorials"
                Path="Home | Tutorials"
            />
            <TutorialSection />
        </main>
    );
}

export default Tutorials; 