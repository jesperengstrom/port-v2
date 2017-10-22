import React from 'react';
import PropTypes from 'prop-types';

import Scrollchor from 'react-scrollchor';

//CSS
import './Card.css';

function Card({item, openCard}) {
    const thumb = require('./img/thumb/' + item.img);
        return (
            <div
                className="card-container pointer" 
                onClick={()=>openCard(item)}>
                <Scrollchor to="portfolio" animate={{ offset: 0, duration: 700}} >
                <div 
                    className="overlay flex"
                    style={{backgroundColor:item.color}}>
                    <header className="card-header-container flex">
                        <h3 className="card-header white">
                            {item.name}
                        </h3>
                    </header> 
                </div>
                </Scrollchor>
                <img src={thumb} className="card-img" alt={item.name} />
            </div>
        );
}

export default Card;

Card.propTypes = {
    item: PropTypes.object.isRequired, 
    openCard: PropTypes.func.isRequired,
};