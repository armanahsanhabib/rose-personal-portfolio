import "../../css/common-css/footer.css";
import LOGO from "../../images/logo-wh.png";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="social-area">
                    <img src={LOGO} alt="logo" />
                    <p>Let me be your Honest, Qualified Frontend Developer Partner.</p>
                    <h3>Get in touch</h3>
                    <div className="social-icons">
                        <a href="https://github.com/armanahsanhabib" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/sheikh-ahsan-habib-arman-bb874920b/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/arman.ahsanhabib/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/SheikhAhsanHab3" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.youtube.com/@armanahsanhabib" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div className="contact-details">
                    <h2>Let me be your Honest, Qualified Frontend Developer Partner.</h2>
                    <div className="columns">
                        <div className="col">
                            <h3><i className="fa-solid fa-envelope"></i> SENT MAIL</h3>
                            <div className="mail">
                                <a href="mailto:contact2ahsanhabib@gmail.com" target="_blank" rel="noreferrer">contact2ahsanhabib@gmail.com</a>
                                <br />
                                <a href="mailto:contact@armanahsanhabib.com" target="_blank" rel="noreferrer">contact@armanahsanhabib.com</a>
                            </div>
                        </div>
                        <div className="col">
                            <h3><i className="fa-solid fa-phone"></i> MAKE CALL</h3>
                            <div className="phone">
                                <a href="tel:+880 1704-428814">+880 1704-428814</a>
                                <br />
                                <a href="tel:+880 9638-201512">+880 9638-201512</a>
                            </div>
                        </div>
                        <div className="col">
                            <h3><i className="fa-solid fa-location-dot"></i> ADDRESS</h3>
                            <div className="address">
                                <a href="https://goo.gl/maps/L34JEbuJcV1XQJcUA" target="_blank" rel="noreferrer">
                                    House no: #44, Bagdha <br />
                                    Agailjhara, Barishal, Bangladesh.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 
