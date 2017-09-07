import React from 'react';
import PropTypes from 'prop-types';

//libraries
import VisibilitySensor from 'react-visibility-sensor';

//CSS
import './styles.css';

function Section({ section, setSection, children}){

    function handleChange(status){
        if (status) {
            setSection(section);
        }
    }
        return (
            <div id={section.name} className="section border">
                {children}
                <VisibilitySensor partialVisibility={true} minTopValue={250} onChange={handleChange}/>
            </div>
    );}

Section.propTypes = {
    section: PropTypes.object.isRequired,
    setSection: PropTypes.func.isRequired,
    children: PropTypes.array
};

export default Section;