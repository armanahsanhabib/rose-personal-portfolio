import AboutMeSection from "../components/home/AboutMeSection";
import BlogsSection from "../components/home/BlogsSection";
import ContactSection from "../components/home/ContactSection";
import EducationSection from "../components/home/EducationSection";
import ExperienceSection from "../components/home/ExperienceSection";
import HeroSection from "../components/home/HeroSection";
import PortfolioSection from "../components/home/PortfolioSection";
import ServiceSection from "../components/home/ServiceSection";
import SkillsSection from "../components/home/SkillsSection";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

const Home = () => {
    return (
        <main>
            <HeroSection />
            <AboutMeSection />
            <ServiceSection />
            <SkillsSection />
            <StatsSection />
            <PortfolioSection />
            <TestimonialsSection />
            <EducationSection />
            <ExperienceSection />
            <BlogsSection />
            <ContactSection />
        </main>
    );
}

export default Home; 