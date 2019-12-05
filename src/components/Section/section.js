import React from 'react';

import "./section.scss";
import { Grid } from 'react-flexbox-grid';

const Section = ({ children, className }) => (
    <section className={className}>
        <Grid>
            {children}
        </Grid>
    </section>
);

export default Section;
