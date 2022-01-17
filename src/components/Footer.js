import React from 'react';
import { FooterBase, FooterDown, FooterDownP, FooterUp, FormBtnSub, FormInputEmail, LeftEmail, LeftPhone, LeftStreet, LeftSubtitle, RightSubtitle, UpLeft, UpRight } from './Footer__styled';

const Footer = () => {
    return ( 
        <FooterBase>
            <FooterUp>
                <UpLeft>
                    <div>
                    <LeftSubtitle>CleanWorld</LeftSubtitle>
                    <LeftStreet>Calle. 100 #100-200 Barranquilla, Atl.</LeftStreet>
                    <LeftEmail>+57 3148440611</LeftEmail>
                    <LeftPhone>123-456-7890</LeftPhone>
                    </div>
                </UpLeft>
                <UpRight>
                    <RightSubtitle>Formulario de suscripción</RightSubtitle>
                    <form>
                        <FormInputEmail type='text'></FormInputEmail>
                        <FormBtnSub>Enviar</FormBtnSub>
                    </form>
                </UpRight>
            </FooterUp>
            <FooterDown>
                <FooterDownP>&copy; 2022 por CleanWorld</FooterDownP>
            </FooterDown>
        </FooterBase>
     );
}
 
export default Footer;