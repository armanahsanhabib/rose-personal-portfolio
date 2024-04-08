import HeroSecondary from "../components/common-components/HeroSecondary";
import BlogSection from "../components/home/BlogsSection";

const Blogs = () => {
    return (
        <main>
            <HeroSecondary
                PageTitle="My Blogs"
                Path="Home | Blogs"
            />
            <BlogSection />
        </main>
    );
}

export default Blogs; 