import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './styles.css';

function SectionHeader({displayName}) {
    if (displayName) {
        return (
            {displayName} && 
            <header>
                <div className="section-header-frame">
                    <h2>{displayName}</h2>
                    <div className="section-header-underline"></div>
                </div>
                
            </header>
        );
    } 
    return null;
}

SectionHeader.propTypes = {displayName: PropTypes.oneOfType([PropTypes.string,PropTypes.bool])};

export default SectionHeader;