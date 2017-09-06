import React from 'react';
import { Grid } from 'semantic-ui-react';
import VisibilitySensor from 'react-visibility-sensor';

//CSS
import './styles.css';

export function Section({ section, setSection, children }) {

    function handleChange(status){
        if (status) {
            setSection(section);
        }
    }
    return (
        <Grid.Column id={section.id} className="border section">
            {children}
            <VisibilitySensor partialVisibility={true} minTopValue={250} onChange={handleChange}/>
        </Grid.Column>
    );
}

export default Section;