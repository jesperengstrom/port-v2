import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './styles.css';

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
    item: PropTypes.obj,
    onClick: PropTypes.func
};

export default Item;