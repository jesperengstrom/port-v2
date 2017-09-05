import React from 'react';
import { Grid } from 'semantic-ui-react';
import VisibilitySensor from 'react-visibility-sensor';

//CSS
import './Section.css';

export function Section(props) {

    function handleChange(status){
        if (status) {
            props.setSection(props.section);
        }
    }
    return (
        <Grid.Column className="full-height border">
            {props.children}
            <VisibilitySensor partialVisibility={true} minTopValue={250} onChange={handleChange}/>
        </Grid.Column>
    )
}

