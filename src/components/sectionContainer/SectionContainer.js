import React from 'react';
import SectionAbout from './SectionAbout';
import Section from './SectionContainer__styled';
import SectionIntro from './SectionIntro';

const SectionContainer = () => {
    return ( 
        <Section>
            <SectionIntro />
            <SectionAbout />
        </Section>
     );
}
 
export default SectionContainer;