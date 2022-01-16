import React from 'react';
import Logo from '../img/Logo.png'
import { CwHeader, CwHeaderTitulo, CwSubtitulo, CwHeaderImg, CwHeaderHr, CwHeaderDiv, 
        NavUl, NavLi, NavA } from './Header__styled'

const Header = () => {
    return ( 
        <CwHeader>
            <CwHeaderDiv>
                <CwHeaderImg src={Logo} alt="logo-cleanwrld"></CwHeaderImg>
                <CwHeaderTitulo>CleanWrld</CwHeaderTitulo>
                <CwSubtitulo>Limpiando espacios para tu comonidad.</CwSubtitulo>
                <CwHeaderHr/>
                <nav>
                <NavUl>
                    <NavLi><NavA href="http://localhost:3000/">Inicio</NavA></NavLi>
                    <NavLi><NavA href="http://localhost:3000/">Reserva Online</NavA></NavLi>
                    <NavLi><NavA href="http://localhost:3000/">Clientes</NavA></NavLi>
                    <NavLi><NavA href="http://localhost:3000/">Reciba una cotización</NavA></NavLi>
                    <NavLi><NavA href="http://localhost:3000/">Acerca de</NavA></NavLi>
                    <NavLi><NavA href="http://localhost:3000/">Servicios</NavA></NavLi>
                    <NavLi><NavA href="http://localhost:3000/">Contacto</NavA></NavLi>
                    <NavLi><NavA href="http://localhost:3000/">Funciones</NavA></NavLi>
                </NavUl>
            </nav>
            </CwHeaderDiv>
        </CwHeader>
     );
}
 
export default Header;