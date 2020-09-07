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
          <p>Десница тысячелетия и моллюск!</p>
        </FooterText>
      </Footer>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  height: 102px;
  background-color: #282d30;
`;

const Logo = styled.img`
  display: block;
  margin: auto;
  margin-top: 3px;
`;

const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 958px;
  margin-left: auto;
  margin-right: auto;
`;

const Caption = styled.h1`
  margin-top: 60px;
  margin-bottom: 60px;
  font-size: 42px;
  color: #282d30;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
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

const Copyright = styled.p``;
