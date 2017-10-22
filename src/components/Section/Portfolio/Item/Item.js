import React from 'react';
import PropTypes from 'prop-types';

import Opencard from '../Card/Opencard';

//CSS
import './Item.css';
import '../../../../font/font-mfizz-2.4.1/font-mfizz.css';

function Item({item, onClick, isOpen, closeCard, hidden}) {

    function renderTools() {
        const tools = item.tools.map((el) => {
            return (
                <span key={el} className="flex mr-1 ml-1 mb-1">
                    <span className="dev-icon">
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
            case 'ES6':
            icon = 'icon-javascript';
            break;
            case 'HTML':
            icon = 'icon-html5';
            break;
            case 'CSS':
            icon = 'icon-css3';
            break;
            case 'Git':
            icon = 'icon-git';
            break;
            case 'Node.js':
            icon = 'icon-nodejs';
            break;
            case 'MongoDB':
            icon = 'icon-mongodb';
            break;
            case 'SASS':
            icon = 'icon-sass';
            break;
            case 'Gulp':
            icon = 'icon-gulp';
            break;
            case 'jQuery':
            icon = 'icon-jquery';
            break;
            case 'Bootstrap':
            icon = 'icon-bootstrap';
            break;
            case 'MySQL':
            icon = 'icon-mysql';
            break;
            case 'PHP':
            icon = 'icon-php';
            break;
            case 'React':
            icon = 'icon-reactjs';
            break;
            default:
            break;
        }

        if (icon) {
            return <i className={icon}></i>;
        } return null;
    }

    return (
        <div className={`flex card-wrapper opencard-wrapper ${hidden === 'opencard' ? 'no-height' : ''}`}>
            <div className='flex portfolio-item-wrapper item-text'>
                <div className='item-text item-date bold'>
                    <p>{item.date}</p>
                </div>
                <div>
                    <div className='portfolio-item'>
                        {item.description}
                    </div>
                    <div className="item-underline"></div>
                    <div className="flex tools-wrapper">
                        <p className="bold flex mr-1 nowrap">Byggd med </p>
                        <p className="flex flex-wrap">
                            {renderTools()}
                        </p>
                    </div>
                    <div className="item-underline thin-underline"></div>
                    <div className="portfolio-item flex">
                        <a href={item.url} target="_blank" className="item-link bold">
                            <p>
                                <i className="icon anticon">&#xe61b;</i>
                                Till sajten
                            </p>
                        </a>
                        <a href={item.repo} target="_blank" className="item-link">
                            <p className="ml-1">
                                <i className="icon anticon dev-icon">&#xe6ad;</i>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <aside className="flex flex-column opencard-container">
                <Opencard 
                    item={item} 
                    closeCard={closeCard}/>
            </aside>
        </div>



        
    );
}

Item.propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func
};

export default Item;