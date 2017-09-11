import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './styles.css';

function Item({item, onClick}) {
    return (
        <div className='portfolio-item-wrapper'>
            <div 
                className='portfolio-item'>
                    <h2>{item.name}
                    </h2>
                    <button onClick={onClick}>Stäng</button>
            </div>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.obj,
    onClick: PropTypes.func
};

export default Item;