import "../../css/home/service-section.css";
import DesignIcon from "../../images/design-icon.svg";
import DevIcon from "../../images/development-icon.svg";
import ServerIcon from "../../images/server-icon.svg";

const ServiceList = (props) => {
    return (
        <li>
            <i className={`fa-regular fa-${props.liIcon}`}></i>
            <span className="liText">{props.liText}</span>
        </li>
    );
}

const ServiceCard = (props) => {
    return (
        <div className="service-card">
            <img src={props.icon} alt="icon1" />
            <h3>{props.serviceName}</h3>
            <hr />
            <p>{props.serviceDetails}</p>
            <ul>
                {props.li}
            </ul>
        </div >
    );
}

const services = [
    {
        image: DesignIcon,
        title: "Frontend Development",
        lists: [
            ["box", "Dynamic and interactive UI."],
            ["globe", "Single-page applications."],
            ["mobile", "Performance optimization"],
            ["brush", "Custom React components"],
        ]
    },
    {
        image: DevIcon,
        title: "React Consulting",
        lists: [
            ["desktop", "React consulting services"],
            ["cart-shopping", "Debugging & troubleshooting"],
            ["laptop-code", "Code reviews"],
            ["gears", "React architecture & design"],
        ]
    },
    {
        image: ServerIcon,
        title: "Custom React Development",
        lists: [
            ["code-branch", "Custom React App"],
            ["chart-line", "Data visualization dashboards"],
            ["envelope", "Real-time chat applications"],
            ["desktop", "Progressive web applications"],
        ]
    },
];

const ServiceSection = () => {
    return (
        <div className="service-section">
            <div className="container">
                <h2 className="section-title">My Services</h2>
                <p className="service-info">I understand your requirement and provide quality works.</p>
                <div className="service-card-container">
                    {
                        services.map((i) => (
                            <ServiceCard
                                key={i.title}
                                icon={i.image}
                                serviceName={i.title}
                                serviceDetails={i.text}
                                li={i.lists.map((j) => (
                                    <ServiceList
                                        key={j[1]}
                                        liIcon={j[0]}
                                        liText={j[1]}
                                    />
                                ))}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ServiceSection; 