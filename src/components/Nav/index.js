import React from 'react';
import PropTypes from 'prop-types';

//libs
import { Icon } from 'semantic-ui-react';
import Scrollchor from 'react-scrollchor';

//CSS
import './styles.css';

function Nav({ next, last }){

    return (
        <div className="nav flex justify-center">
            <div className="fixed flex align-end p-1" style={{height:'33%'}}>
                <Scrollchor 
                    to={next} 
                    animate={{ offset: 0, duration: 700}} 
                    className={`transition-flip ${last ? 'flip' : ''}`}>
                    <Icon name='arrow down'link size='huge' />
                </Scrollchor>
            </div>
        </div>
        );
    }

Nav.propTypes = {
    next: PropTypes.string.isRequired,
    last: PropTypes.bool.isRequired
};

export default Nav;