import React from 'react';
import PropTypes from 'prop-types';

//components
import SectionHeader from './SectionHeader';
import Portfolio from './Portfolio';
import Hero from './Hero';
import About from './About';

//libraries
import VisibilitySensor from 'react-visibility-sensor';

//CSS
import './styles.css';

function Section({ section, setSection}){
    //sets current section in app.kjs
    function visibleSection(status){
        if (status) {
            setSection(section);
        }
    }

    //temp object to reference my imported section components...
    const appSections = { 
        hero: Hero,
        portfolio: Portfolio,
        about: About  
    };

    //Storing the current one under a name...
    const ThisSection = appSections[section.name];

        return (
            <section id={section.name} className="section flex flex-column">
                <SectionHeader displayName={section.displayName} />
                <VisibilitySensor partialVisibility={true} minTopValue={250} onChange={visibleSection}/>
                {/* JSX elements can't be an expression. Using the name referencing one of the components */}
                <ThisSection />
            </section>
    );}

Section.propTypes = {
    section: PropTypes.object.isRequired,
    setSection: PropTypes.func.isRequired,
};

export default Section;