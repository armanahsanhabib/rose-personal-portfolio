import React from 'react';
import '../../css/tutorials/tutorials-section.css';

const TutorialsCard = (props) => {
    return (
        <div className="tutorials-card">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.videoI}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
};

const TutorialSection = () => {
    return (
        <div className="tutorials-section">
            <div className="container">
                <div className="top-section">
                    <h2 className="section-title">My Tutorials</h2>
                    <p className="tutorials-info">I make programming and computer science videos.</p>
                </div>
                <div className="tutorials-card-container">
                    <TutorialsCard videoI="RLW-hI6JDm8?start=20" />
                    <TutorialsCard videoI="kFv51ep4Tyo?start=45" />
                    <TutorialsCard videoI="7bnIG2MV98k?start=95" />
                    <TutorialsCard videoI="9MwCKJ1ivws" />
                    <TutorialsCard videoI="SfdPe_Fntc0" />
                    <TutorialsCard videoI="yphVyjWPApg" />
                    <TutorialsCard videoI="jdB81zmaGAo" />
                    <TutorialsCard videoI="4_T1Gim2OQ4" />
                    <TutorialsCard videoI="KoWWhUao178" />
                    <TutorialsCard videoI="9hrHNthNmZk" />
                    <TutorialsCard videoI="E19Z1NbybX8" />
                    <TutorialsCard videoI="atnVq8pmw14" />
                    <TutorialsCard videoI="ABmJKpUTJuY" />
                </div>
            </div>
        </div>
    );
};

export default TutorialSection;