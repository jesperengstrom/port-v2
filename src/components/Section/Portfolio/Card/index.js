import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './styles.css';

function Card({item, onClick, reverse}) {
   const thumb = require('./img/thumb/' + item.img);
    return (
        <div className="card-container">
            <div 
                className={`card flex ${reverse ? 'flex-column-reverse' : 'flex-column'}`}
                onClick={()=>onClick(item)}>
                    <div className="flex">
                        <h3 className="p-1">
                            {item.name}
                        </h3>
                    </div>
                    <div className="card-img-container flex">
                        <img src={thumb} className="card-img" alt={item.name} />
                    </div>
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    item: PropTypes.object.isRequired, 
    onClick: PropTypes.func.isRequired,
    reverse: PropTypes.bool.isRequired
};