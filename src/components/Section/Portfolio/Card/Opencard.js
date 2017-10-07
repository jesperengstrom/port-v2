import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './Card.css';

function Opencard({item, closeCard}) {
    const thumb = require('./img/thumb/' + item.img);
        return (
            <div className="card-container">
                <div 
                    className="overlay flex overlay-visible" 
                    style={{backgroundColor:item.color}}>
                    <header className="card-header-container flex">
                            <span 
                                className="close-icon pointer"
                                onClick={closeCard}>
                                <i className="anticon small-icon white">&#xe633;</i>
                            </span>
                        <h3 className="card-header white header-visible">
                            {item.name}
                        </h3>
                    </header> 
                </div>
                <img src={thumb} className="card-img" alt={item.name} />
            </div>
        );
}

export default Opencard;

Opencard.propTypes = {
    item: PropTypes.object.isRequired, 
    closeCard: PropTypes.func.isRequired,
};