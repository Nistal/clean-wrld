import React from 'react';
import styled from 'styled-components';
import aboutImg from '../../img/aseo-about.png'

const SectionAboutBase = styled.div`
    background: linear-gradient(#54A474, #3E7957, #0C3C2C);
    padding: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const About = styled.div`
width: 500px;
    background: white;
    padding: 5rem 6rem;
    position: relative;
    left: 40px;
    z-index: 100;
    border-radius: 2rem;
`;

const AboutH2 = styled.h2`
    font-size: 5rem;
    font-weight: 700;
    line-height: 2;
    color: #3E7957;
`;

const AboutP = styled.p`
    font-size: 1.7rem;
    font-weight: 300;
    line-height: 2;
    color: #0C3C2C;
`;

const AboutBtn = styled.button`
    font-size: 1.7rem;
    font-weight: 300;
    line-height: 1.5;
    padding: 1rem 3rem;
    margin: 5rem 0 2rem 0;
    background: #3E7957;
    color: white;
    cursor: pointer;
    border-radius: .5rem;
    border-style: none;
`;

const AboutImg = styled.img`
    position: relative;
    left: -100px;
`;

const SectionAbout = () => {
    return ( 
        <SectionAboutBase>
            <About>
                <AboutH2>Acerca de</AboutH2>
                <AboutP>La misión de CleanWorld es sencilla: proporcionar servicios de alta calidad en tiempo y forma.
                    Nuestro equipo va más allá de sus límites para cubrir las necesidades de cada proyecto. Por medio de
                    una comunicación clara y un servicio inigualable, esperemos poder superar sus expectativas en
                    Servicio de limpieza. Para obtener más información, contáctenos hoy mismo.
                </AboutP>
                <AboutBtn>Contacto</AboutBtn>
            </About>
            <AboutImg src={aboutImg} alt="about-image" />
        </SectionAboutBase>
     );
}
 
export default SectionAbout;