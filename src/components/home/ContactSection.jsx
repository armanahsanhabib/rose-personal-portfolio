import "../../css/home/contact-section.css";

const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <div className="content">
                    <form className="contact-form">
                        <div className="item">
                            <label htmlFor="name">Your Name <span className="required">*</span></label>
                            <input id="name" type="text" placeholder="Enter your name..." required />
                        </div>
                        <div className="item">
                            <label htmlFor="email">Email <span className="required">*</span></label>
                            <input id="email" type="email" placeholder="Enter your email address..." required />
                        </div>
                        <div className="item">
                            <label htmlFor="message">Message <span className="required">*</span></label>
                            <textarea name="message" id="message" placeholder="Enter your message..."></textarea>
                        </div>
                        <div className="button">
                            <input className="btn-primary" type="submit" value="Submit" />
                            {/* <input className="btn-secondary" type="reset" value="Reset Form" /> */}
                        </div>
                    </form>
                    <iframe
                        className="address-location"
                        title="Ahsan Habib"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7348.5410337601625!2d90.0757194!3d22.9402624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37555c2635105979%3A0x669f71e03bd1712e!2zMjLCsDU2JzI0LjkiTiA5MMKwMDQnMzcuNiJF!5e0!3m2!1sen!2sbd!4v1670773305978!5m2!1sen!2sbd">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactSection; 