import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './Item.css';

function Item({item, onClick}) {
    return (
        <div className='portfolio-item-wrapper'>
            <div className='portfolio-item'>
                {item.description}
            </div>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func
};

export default Item;