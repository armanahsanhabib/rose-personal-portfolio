const SkillList = (props) => {
    return (
        <li>
            <i className={`fa-regular fa-${props.liIcon}`}></i>
            <span className="list-item">{props.liItem}</span>
        </li>
    );
}

const SkillCard = (props) => {
    return (
        <div className="skill-card">
            <div className="skill-icon">
                <i className={props.skillIcon}></i>
            </div>
            <h3>{props.skillName}</h3>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${props.skillPercent}` }}></div>
                <div className="percent">{props.skillPercent}</div>
            </div>
            <ul>
                {props.list}
            </ul>
        </div >
    );
}

export { SkillCard, SkillList };