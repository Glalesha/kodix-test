import React from "react";
import styled from "styled-components";
import AddCarForm from "../AddCarForm/AddCarForm";
import CarsInStock from "../CarsInStock/CarsInStock";

const Main: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Header>
        <Logo src="/images/header-logo.png"></Logo>
      </Header>
      <MainBlock>
        <Caption>¡Ay caramba!</Caption>
        <AddCarForm />
        <CarsInStock />
      </MainBlock>
      <Footer>
        <FooterText>
          <Copyright>© 2020 CAPTAIN QUACK</Copyright>
          <FooterSubText>Десница тысячелетия и моллюск!</FooterSubText>
        </FooterText>
      </Footer>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  flex-shrink: 0;
  height: 102px;
  background-color: #282d30;
`;

const Logo = styled.img`
  display: block;
  margin: auto;
  margin-top: 3px;

  @media (max-width: 720px) {
    width: 300px;
    height: 63px;
    margin-top: 22px;
  }
`;

const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 978px;
  margin-left: auto;
  margin-right: auto;
`;

const Caption = styled.h1`
  margin-top: 60px;
  margin-bottom: 60px;
  font-size: 42px;
  color: #282d30;

  @media (max-width: 720px) {
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  height: 102px;
  margin-top: auto;
  background-color: #282d30;
`;

const FooterText = styled.div`
  font-size: 11px;
  color: #ffffff;
  text-align: center;
`;

const Copyright = styled.p`
  margin-top: 0;
  margin-bottom: 3px;
`;

const FooterSubText = styled.p`
  margin: 0;
`;
