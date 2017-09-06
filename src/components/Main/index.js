import React from 'react';

//CSS
import './styles.css';

function Main({children}) {
        return (
            <div className="main full-height flex flex-column">
                {children}
            </div>
        );
    }

export default Main;