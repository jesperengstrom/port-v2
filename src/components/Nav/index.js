import React from 'react';
import { Icon } from 'semantic-ui-react';

//CSS
import './styles.css';

function Nav({ next, last }){

    return (
        <div className="nav flex justify-center">
            <div className="fixed flex align-end p-1" style={{height:'33%'}}>
                <a href={'#' + next} className={`transition-flip ${last ? 'flip' : ''}`}>
                    <Icon name='arrow down'link size='huge' />
                </a>
            </div>
        </div>
        );
    }

export default Nav;