import React from "react";
import styled from "styled-components";
import { CarType, StatusHandler } from "../../types";
import { BaseColor } from "../BaseColor/BaseColor";
import { addSpacesInNumber } from "../../utils";

interface Props {
  cars: CarType[];
  statusHandler: StatusHandler;
  deleteCar(carId: number): void;
}

const CarsList: React.FC<Props> = ({ cars, statusHandler, deleteCar }) => {
  return (
    <List>
      {cars.map((car: CarType) => {
        return (
          <Item key={car.id}>
            <CarBlock>
              <Header>
                <Title>{car.title}</Title>
                <BaseColorWrapper>
                  <BaseColor color={car.color}></BaseColor>
                </BaseColorWrapper>
                <Price>{addSpacesInNumber(car.price.toString())} руб.</Price>
              </Header>
              {car.description ? (
                <Description>{car.description}</Description>
              ) : null}
              <Footer>
                <Year>{car.year}</Year>
                <Status>{statusHandler(car.status)}</Status>
                <DeleteButton onClick={() => deleteCar(car.id)}>
                  Удалить
                </DeleteButton>
              </Footer>
            </CarBlock>
          </Item>
        );
      })}
    </List>
  );
};

export default CarsList;

const List = styled.ul``;

const Item = styled.li``;

const CarBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px 22px 13px 17px;
  background-color: #f5f6f6;
  border-bottom: 1px solid #dadada;
  color: #323232;
  font-size: 15px;
`;

const Header = styled.header`
  display: flex;
`;

const BaseColorWrapper = styled.div`
  margin: 0 15px 0 auto;
`;

const Price = styled.p`
  flex-shrink: 0;
  width: 100px;
  margin-top: 2px;
  margin-bottom: 0;
  white-space: nowrap;
`;

const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  margin-top: 15px;
`;

const Year = styled.p`
  margin: 0 14px 7px 0;
`;

const Status = styled.p`
  margin: 0 0 7px 0;
`;

const DeleteButton = styled.button`
  margin-left: auto;
  padding: 8px 15px;
  background: none;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  color: #8b8b8b;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #ffffff;
    background-color: #282d30;
  }
`;

const Title = styled.h3`
  margin: 0 40px 0 0;
  font-size: 15px;
  font-weight: 300;
  color: #323232;
  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
`;

const Description = styled.p`
  margin-top: 9px;
  margin-bottom: 0;
  font-size: 13px;
  color: #8b8b8b;
`;
