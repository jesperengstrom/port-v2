import React from 'react';

//CSS
import './Hero.css';

function Hero(props) {
    return(
        <article className="hero-container">
            <h2 className="mt-0 mb-2">Hej!</h2>
            <h2 className="mt-0 ml-1 mr-1">Jag heter Jesper Engström och pluggar till Front end-utvecklare i Stockholm.</h2>
            <h2 className="mt-0 ml-1 mr-1 mb-1">Här är några saker som jag har gjort:</h2>
        </article>
    );
}

export default Hero;

