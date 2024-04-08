import { Link, Outlet } from "react-router-dom";
import RESUMEDownload from "../../assets/Ahsan Habib Resume.pdf";
import "../../css/common-css/header.css";
import LOGO from "../../images/logo.png";
// const RESUME = "https://drive.google.com/file/d/1Z-npoFfD9zxEP83Cd1rh_t6cp1jfAIcy/view?usp=share_link";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/myskills">My Skills</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/tutorials">Tutorials</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
            </ul>
        </nav>
    );
}

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo_area">
                        <a href="http://" rel="noopener noreferrer"><img src={LOGO} alt="logo" /></a>
                    </div>
                    <NavBar />
                    <div className="right_menu">
                        <div className="btn-primary"><a href={RESUMEDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD CV</a></div>
                        <div className="btn-menu" id="btn-nav"><i className="fa-solid fa-bars"></i></div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Header; 
