import React from 'react';
import PropTypes from 'prop-types';

//libs
import Scrollchor from 'react-scrollchor';

//CSS
import './Nav.css';

function Nav({ next, last }){

    return (
        <nav className="nav flex justify-center">
            <div className='fixed fixed-top'>
                <a href="mailto:jengstro@gmail.com">
                    <i className="anticon large-icon">&#xe659;</i>
                </a>
            </div>
            <div className="fixed fixed-bottom flex align-end p-1" style={{height:'33%'}}>
                <Scrollchor 
                    to={next}
                    animate={{ offset: 0, duration: 700}} 
                    className={`transition-flip ${last ? 'flip' : ''}`}>
                        <i className="anticon large-icon">&#xe619;</i>
                </Scrollchor>
            </div>
        </nav>
        );
    }

Nav.propTypes = {
    next: PropTypes.string,
    last: PropTypes.bool.isRequired
};

export default Nav;