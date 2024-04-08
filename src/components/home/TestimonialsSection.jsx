import "../../css/home/testimonials-section.css";
import ayman from "../../images/ayman-sadiq.jpg";
import munjeren from "../../images/munjeren-shahid.jpg";

const review = [
    {
        clientAvatar: ayman,
        clientName: "Ayman Sadiq",
        clientTitle: "CEO, 10MinuteSchool.com",
        stars: 5,
        jobName: "Frontend Developer",
        comment: "Thank you so much for your immense contribution to our Developer team. We're proud of how much you have grown and wish you all the best in your future endeavors."
    },
    {
        clientAvatar: munjeren,
        clientName: "Munzereen Shahid",
        clientTitle: "Head of HR, 10MS",
        stars: 5,
        jobName: "Content Developer",
        comment: "We would like to express our gratitude for your significant contributions to our Content team. Your growth and progress have made us proud, and we wish you every success in your future journey."
    },
    {
        clientAvatar: "https://www.htcestore.com/media/catalog/product/cache/ccb47da442ebb206d74aa361802c6e2c/p/r/profile.png",
        clientName: '"This might be you"',
        clientTitle: '"My first Upwork Client"',
        stars: 5,
        jobName: "React Project",
        comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni eos quo minus vel, corporis suscipit minima numquam eaque rem."
    },
];

const TestimonialCard = (props) => {
    return (
        <div className="testimonial-card">
            <div className="client">
                <img src={props.clientAvatar} alt={props.clientName} />
                <div className="client-info">
                    <h3 className="client-name">{props.clientName}</h3>
                    <div className="client-title">{props.clientTitle}</div>
                </div>
            </div>
            <div className="review">
                <div className="job-name">{props.jobName}</div>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="comment">{props.comment}</div>
            </div>
        </div>
    );
}

const TestimonialsSection = () => {
    return (
        <div className="testimonials-section">
            <div className="container">
                <h2 className="section-title">Sweet Clients</h2>
                <p className="tesmonial-info">What my clients say about my services</p>
                <div className="testimonials-card-container">
                    {
                        review.map((i) => (
                            <TestimonialCard
                                key={i.clientName}
                                clientAvatar={i.clientAvatar}
                                clientName={i.clientName}
                                clientTitle={i.clientTitle}
                                jobName={i.jobName}
                                comment={i.comment}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TestimonialsSection; 