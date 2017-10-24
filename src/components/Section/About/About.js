import React from 'react';

//CSS
import './About.css';

//IMG
const jesper = require('../../../img/Fredrik_Sahlin.jpg');

function About(props) {
    return(
        <article className="about-wrapper flex">
            <div className="about-text-container item-text bold flex flex-column justify-center">
                <p>Jag är en 35-årig Stockholmare som läser sista året på YH-utbildningen Front end-utvecklare på Nackademin.</p>
                <p>Från början är jag journalist med mångårig erfarenhet som <a className="about-link" href='http://sverigesradio.se/sida/gruppsida.aspx?programid=4832&grupp=22908'>producent</a> och <a className="about-link" href='http://sverigesradio.se/sida/avsnitt/648150?programid=2519'>reporter</a> på Sveriges Radio.</p>
                <p>Till våren 2018 söker jag en praktikplats som utvecklare. Om du tror att jag kan passa hos er, <a className="about-link" href='mailto:jengstro@gmail.com'>säg hej!</a></p>       
            </div>
            <div className="about-img-wrapper flex justify-center align-center">
                <div className="about-img-container">
                    <img className="about-img" src={jesper} alt='Jesper Engström'/>
                </div>
            </div>
        </article>
    );
}

export default About;