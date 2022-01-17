import styled from 'styled-components';

// Paleta de colores
const mainColor = '#0C3C2C';
    // secondaryColor = '#3E7957',
    // tertiaryColor = '#54A474',
    // textColor = '#FFFFFF';

const CwHeader = styled.header`
  max-width: 100%;
  margin: 0 auto;
`;

const CwHeaderDiv = styled.div`
  text-align: center;
  padding: 2rem;
`;

const CwHeaderImg = styled.img`
  width: 10rem;
  display: block;
  margin: 0 auto;
`;

const CwHeaderHr = styled.hr`
  margin: 2rem auto;
  max-width: 60%;
`;

const CwHeaderTitulo = styled.h1`
  font-size: 4rem;
  font-weight: 100;
`;

const CwSubtitulo = styled.h3`
  font-size: 1.7rem;
  font-weight: 300;
  font-style: italic;
`;



// const cwHeader__nav = styled.nav`
  
// `;

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const NavLi = styled.li`
  margin: 0 .5rem;
`;

const NavA = styled.a`
  text-decoration: none;
  font-size: 1.7rem;
  padding: 1rem 0;
  color: ${mainColor};
`;



export {CwHeader, CwHeaderTitulo, CwHeaderDiv, CwHeaderHr, 
    CwHeaderImg, CwSubtitulo, NavUl, NavLi, NavA};