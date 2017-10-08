import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './Item.css';
import '../../../../font/font-mfizz-2.4.1/font-mfizz.css';

function Item({item, onClick}) {

    function renderTools() {
        const tools = item.tools.map((el) => {
            return (
                <span key={el} className="flex">
                    <span className="dev-icon-size">
                        {iconFinder(el)}
                    </span>
                    <span>
                        {el}
                    </span>
                </span>);
        });
        return tools;
    }

    function iconFinder(tool){
        let icon = false;
        switch (tool) {
            case 'JavaScript':
            icon = 'icon-javascript';
            break;
            case 'Node.js':
            icon = 'icon-nodejs';
            break;
            case 'MongoDB':
            icon = 'icon-mongodb';
            break;
        }

        if (icon) {
            return <i className={icon}></i>;
        } return null;
    }

    return (
        <div className='portfolio-item-wrapper item-text'>
            <div className="item-date ml-7">
                <p>{item.date}</p>
            </div>
            <div className='portfolio-item'>
                {item.description}
            </div>
            <div className="item-underline"></div>
            <div className="portfolio-item">
                <p className="flex justify-between">
                    <span className="bold flex mr-1">Byggd med </span>
                    {renderTools()}
                </p>
            </div>
            <div className="item-underline thin-underline"></div>
        </div>
        
    );
}

Item.propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func
};

export default Item;