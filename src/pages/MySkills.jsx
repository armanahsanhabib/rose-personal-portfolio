import HeroSecondary from "../components/common-components/HeroSecondary";
import { SkillDetails } from "../components/my-skills/SkillDetails";

const MySkills = () => {
    return (
        <main>
            <HeroSecondary
                PageTitle="My Skills"
                Path="Home | My Skills"
            />
            <SkillDetails />
        </main>
    );
}

export default MySkills;