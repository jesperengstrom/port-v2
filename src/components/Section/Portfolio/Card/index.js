import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './styles.css';

function Card({item, onClick, full}) {
    const thumb = require('./img/thumb/' + item.img);
        return (
            <div className="card-container" onClick={()=>onClick(item)}>
                <div 
                    className={`overlay flex ${full ? 'overlay-visible' : ''}`} 
                    style={{backgroundColor:item.color}}>
                    <header className="card-header-container flex">
                        <h3 className={`card-header ${full ? 'header-visible' : ''}`}>
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
    onClick: PropTypes.func.isRequired,
    full: PropTypes.bool.isRequired,
};