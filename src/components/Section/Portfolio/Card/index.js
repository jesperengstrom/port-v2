import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './styles.css';

function Card({item, onClick, reverse}) {
   const thumb = require('./img/thumb/' + item.img);
    return (
        <div className="card-container">
            <div 
                style={{backgroundColor: item.color}}
                className={`card flex ${reverse ? 'flex-column-reverse' : 'flex-column'}`}
                onClick={()=>onClick(item)}>
                    <div className={`flex ${reverse ? 'border-top' : 'border-bottom'}`}>
                        <h2 className="card-header p-2">
                            {item.name}
                        </h2>
                    </div>
                    <div className={`card-img-container flex ${reverse ? 'border-bottom' : 'border-top'}`}>
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