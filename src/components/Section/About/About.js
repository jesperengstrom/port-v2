import React from 'react';

//CSS
import './About.css';

function About(props) {
    return(
        <article className="hero-container">
            <h3>Jag är en 35-årig Stockholmare som läser sista året på YH-utbildningen Front end-utvecklare på Nackademin.</h3>
            <h3>Från början är jag journalist med mångårig erfarenhet som <a className="about-link" href='http://sverigesradio.se/sida/gruppsida.aspx?programid=4832&grupp=22908'>producent</a> och <a className="about-link" href='http://sverigesradio.se/sida/avsnitt/648150?programid=2519'>reporter</a> på Sveriges Radio.</h3>
            <h3>Till våren 2018 söker jag en praktikplats som utvecklare. Om du tror att jag kan passa hos er, <a className="about-link" href='mailto:jengstro@gmail.com'>säg hej!</a></h3>       
        </article>
    );
}

export default About;