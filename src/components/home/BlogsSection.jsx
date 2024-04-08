import { Link } from "react-router-dom";
import "../../css/home/blogs-section.css";

const blogs = [
    {
        coverPic: "https://images.ctfassets.net/3s5io6mnxfqz/5925yJyZW7Acg3oKrKzMMu/f09be95d1b827ad2c3518ccb6504440f/positions-in-a-company.jpeg",
        date: "26th December, 2022",
        bloggerName: "Ahsan Habib",
        blogTitle: "Today I published my Personal Portfolio Website",
        blogDetails: "Thank you so much for your immense contribution to our Content team as a Typist. We're proud of how much you have grown and wish you all the best in your future endeavors."
    },
    {
        coverPic: "https://images.ctfassets.net/3s5io6mnxfqz/5925yJyZW7Acg3oKrKzMMu/f09be95d1b827ad2c3518ccb6504440f/positions-in-a-company.jpeg",
        date: "21st December, 2022",
        bloggerName: "Ahsan Habib",
        blogTitle: "How to start your web development journey.",
        blogDetails: "Thank you so much for your immense contribution to our Content team as a Typist."
    },
    {
        coverPic: "https://images.ctfassets.net/3s5io6mnxfqz/5925yJyZW7Acg3oKrKzMMu/f09be95d1b827ad2c3518ccb6504440f/positions-in-a-company.jpeg",
        date: "12th November, 2022",
        bloggerName: "Ahsan Habib",
        blogTitle: "5 Mistakes every Beginner React Developer does.",
        blogDetails: "Thank you so much for your immense contribution to our Content team as a Typist. "
    },
    {
        coverPic: "https://images.ctfassets.net/3s5io6mnxfqz/5925yJyZW7Acg3oKrKzMMu/f09be95d1b827ad2c3518ccb6504440f/positions-in-a-company.jpeg",
        date: "6th October, 2022",
        bloggerName: "Ahsan Habib",
        blogTitle: "3 important things to know before you purchase domain and hosting.",
        blogDetails: "Thank you so much for your immense contribution to our Content team as a Typist. "
    },
];

const BlogsCard = (props) => {
    return (
        <div className="blogs-card">
            <img className="blog-image" src={props.coverPic} alt={props.blogTitle} />
            <div className="blog-content">
                <div className="blog-info">
                    <div className="date">
                        <i className="fa-solid fa-calendar-days"></i>
                        <span>{props.date}</span>
                    </div>
                    <div className="blogger-name">
                        <i className="fa-solid fa-user"></i>
                        <span>by {props.bloggerName}</span>
                    </div>
                </div>
                <h2 className="blog-title">{props.blogTitle}</h2>
                <p className="blog-details">{props.blogDetails}</p>
                <div className="read-more">
                    <a href="http://" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
            </div>
        </div>
    );
}

const BlogsSection = () => {
    return (
        <div className="blogs-section">
            <div className="container">
                <h2 className="section-title">My Blogs</h2>
                <p className="blogs-info">I'll write my stories, achievement and tips and tricks.</p>
                <div className="blogs-card-container">
                    {
                        blogs.map((i) => (
                            <BlogsCard
                                key={i.date}
                                coverPic={i.coverPic}
                                date={i.date}
                                bloggerName={i.bloggerName}
                                blogTitle={i.blogTitle}
                                blogDetails={i.blogDetails}
                            />
                        ))
                    }
                </div>
                <div className="btn-primary"><Link to="/blogs" target="_blank" rel="noopener noreferrer"> View All Blogs </Link></div>
            </div>
        </div>
    );
}

export default BlogsSection; 