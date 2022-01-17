import styled from 'styled-components';

const FooterBase = styled.footer`
    width: 100%;
    margin: 0 auto;
`;

const FooterUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`;

const UpLeft = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`;

const LeftSubtitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    color: #3E7957;
    margin: 2rem 0;
`;

const LeftStreet = styled.p`
    font-size: 1.3rem;
    font-weight: 300;
    margin: .5rem 0;
`;

const LeftEmail = styled.p`
    font-size: 1.3rem;
    font-weight: 300;
    margin: .5rem 0;
`;

const LeftPhone = styled.p`
    font-size: 1.3rem;
    font-weight: 300;
    margin: .5rem 0;
`;

const UpRight = styled.div`
    width: 50%;
`;

const RightSubtitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    color: #3E7957;
    margin: .5rem 0;
`;

const FormInputEmail = styled.input`
    font-size: 1.3rem;
    width: 300px;
    height: 3.5rem;
    outline: none;
    padding: 0 .5rem;
`;

const FormBtnSub = styled.button`
    width: 10rem;
    height: 3.5rem;
    margin-left: .5rem;
    font-size: 1.7rem;
    padding: 0 .5rem;
    font-weight: 900;
    color: white;
    background: #0C3C2C;
    border-style: none;
    cursor: pointer;
`;

const FooterDown = styled.div`
    background: #0C3C2C;
    text-align: center;
    padding: 1rem;
    margin: 1rem 0 .5rem 0;
`;

const FooterDownP = styled.p`
    font-size: 1.3rem;
    font-weight: 300;
    color: white;
`;

export {FooterBase, FooterUp, UpLeft, LeftSubtitle, LeftStreet, LeftPhone, 
    LeftEmail, UpRight, RightSubtitle, FormInputEmail, FormBtnSub, 
    FooterDown, FooterDownP }