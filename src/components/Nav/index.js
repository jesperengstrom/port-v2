import React from 'react';
import { Icon } from 'semantic-ui-react';

//CSS
import './styles.css';

function Nav(){
    return (
        <div className="nav flex justify-center">
            <div className="flex align-end p-1" style={{height:'33%'}}>
            <Icon name='arrow down' link size='huge' />
            </div>
        </div>
        );
    }

export default Nav;