import React from 'react';

//libraries
import ScrollableAnchor from 'react-scrollable-anchor';
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
        <ScrollableAnchor id={section.id}>
            <div className="section border">
                {children}
                <VisibilitySensor partialVisibility={true} minTopValue={250} onChange={handleChange}/>
            </div>
        </ScrollableAnchor>
    );}

export default Section;