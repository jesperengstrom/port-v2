import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './Card.css';

function Card({item, openCard}) {
    const thumb = require('./img/thumb/' + item.img);
        return (
            <div
                className="card-container pointer" 
                onClick={()=>openCard(item)}>
                <div 
                    className="overlay flex"
                    style={{backgroundColor:item.color}}>
                    <header className="card-header-container flex">
                        <h3 className="card-header white">
                            {item.name}
                        </h3>
                    </header> 
                </div>
                <img src={thumb} className="card-img" alt={item.name} />
            </div>
        );
}

export default Card;

Card.propTypes = {
    item: PropTypes.object.isRequired, 
    openCard: PropTypes.func.isRequired,
};