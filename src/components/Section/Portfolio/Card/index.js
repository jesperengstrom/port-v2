import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './styles.css';

function Card({item, onClick}) {
   const thumb = require('./img/thumb/' + item.img);
    return (
        <div style={{backgroundColor:item.color}} className="card-container" onClick={()=>onClick(item)}>
            <img src={thumb} className="card-img" alt={item.name} />
        </div>
    );
}

export default Card;

Card.propTypes = {
    item: PropTypes.object.isRequired, 
    onClick: PropTypes.func.isRequired,
};