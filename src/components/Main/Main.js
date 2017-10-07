import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './Main.css';

function Main({children}) {
        return (
            <main className="main flex flex-column">
                {children}
            </main>
        );
    }

Main.propTypes = {
    children: PropTypes.array
};

export default Main;