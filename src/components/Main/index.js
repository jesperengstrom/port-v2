import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './styles.css';

function Main({children}) {
        return (
            <main className="main full-height flex flex-column">
                {children}
            </main>
        );
    }

Main.propTypes = {
    children: PropTypes.array
};

export default Main;