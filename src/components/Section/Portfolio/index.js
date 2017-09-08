import React from 'react';

//data
import { items } from './items';

//CSS
import './styles.css';

function Portfolio(props) {
    return(
        <article className="flex full-height p-2">
            <div className="flex half-width">
                    {items.map((items, index) => {
                        return <p key={index}>{items.name}</p>;
                        
                    })}
            </div>
            <div className="flex half-width">
            </div>
        </article>
    );
}

export default Portfolio;