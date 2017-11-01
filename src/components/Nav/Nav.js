import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './Nav.css';

//Smooth scroll polyfill
require('smoothscroll-polyfill').polyfill();

function Nav({ next, last }){

    function scrollTo(){
        document.querySelector('#' + next).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className="nav flex justify-center">
            <div className='fixed fixed-top p-2'>
                <a href="mailto:jengstro@gmail.com">
                    <i className="anticon large-icon">&#xe659;</i>
                </a>
            </div>
            <div className="fixed fixed-bottom flex align-end p-2" style={{height:'33%'}}>
            <a onClick={scrollTo} className={`transition-flip ${last ? 'flip' : ''}`}>
                <i className="anticon large-icon">&#xe619;</i>
            </a>
            </div>
        </nav>
        );
    }

Nav.propTypes = {
    next: PropTypes.string,
    last: PropTypes.bool.isRequired
};

export default Nav;