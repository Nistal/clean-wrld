import React from 'react';
import styled from 'styled-components';
import Trapear from '../../img/trapear.jpg'

const SectionIntroBase = styled.div`
    background-image: url(${Trapear});
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 1rem;
`;

const SectionIntroLeft = styled.div`
    text-align: center;
    padding: 25rem 10rem;
`;

const IntroLeftH2 = styled.h2`
    font-size: 12rem;
    font-weight: 300;
    letter-spacing: 1rem;
    color: #0C3C2C;
`;

const IntroLeftH3 = styled.h3`
    font-size: 3rem;
    font-weight: 300;
    font-style: italic;
    color: #0C3C2C;
`;

const SectionIntro = () => {
    return ( 
        <SectionIntroBase>
            <SectionIntroLeft>
                <IntroLeftH2>Clean World</IntroLeftH2>
                <IntroLeftH3>Servicio de limpieza excepcional desde 1990.</IntroLeftH3>
            </SectionIntroLeft>
        </SectionIntroBase>
     );
}
 
export default SectionIntro;