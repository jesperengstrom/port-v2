import React from 'react';
import PropTypes from 'prop-types';

//components
import SectionHeader from './SectionHeader';

//libraries
import VisibilitySensor from 'react-visibility-sensor';

//CSS
import './styles.css';

function Section({ section, setSection}){

    function visibleSection(status){
        if (status) {
            setSection(section);
        }
    }
        return (
            <div id={section.name} className="section">
                <SectionHeader displayName={section.displayName} />
                <VisibilitySensor partialVisibility={true} minTopValue={250} onChange={visibleSection}/>
            </div>
    );}

Section.propTypes = {
    section: PropTypes.object.isRequired,
    setSection: PropTypes.func.isRequired,
};

export default Section;