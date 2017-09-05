import React from 'react';
import { Grid } from 'semantic-ui-react';

export function Main(props) {
    return (
        <Grid container columns={1}>
            {props.children}
        </Grid>
    )
}