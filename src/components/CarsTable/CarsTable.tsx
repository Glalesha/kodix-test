import React from "react";
import styled from "styled-components";
import { BaseColor } from "../BaseColor/BaseColor";
import { addSpacesInNumber } from "../../utils";
import { CarType } from "../../types";
import { StatusHandler } from "../../types";

interface Props {
  cars: CarType[];
  statusHandler: StatusHandler;
  deleteCar(carId: number): void;
}

const CarsTable: React.FC<Props> = ({ cars, statusHandler, deleteCar }) => {
  return (
    <Table>
      <thead>
        <TrHead>
          <ThTitle>Название</ThTitle>
          <ThYear>Год</ThYear>
          <ThColor>Цвет</ThColor>
          <ThStatus>Статус</ThStatus>
          <ThPrice>Цена</ThPrice>
          <ThDelete></ThDelete>
        </TrHead>
      </thead>
      <tbody>
        {cars.map((car: CarType) => {
          return (
            <Tr key={car.id}>
              <TdTitle>
                <Title>{car.title}</Title>
                {car.description ? (
                  <Description>{car.description}</Description>
                ) : null}
              </TdTitle>
              <TdYear>{car.year}</TdYear>
              <TdColor>
                <BaseColor color={car.color}></BaseColor>
              </TdColor>
              <TdStatus>{statusHandler(car.status)}</TdStatus>
              <TdPrice>{addSpacesInNumber(car.price.toString())} руб.</TdPrice>
              <TdDelete>
                <DeleteButton onClick={() => deleteCar(car.id)}>
                  Удалить
                </DeleteButton>
              </TdDelete>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CarsTable;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  table-layout: fixed;

  @media (max-width: 720px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const TrHead = styled.tr`
  height: 44px;
  border-radius: 4px 4px 0px 0px;
  background-color: #c3002f;
  color: #ffffff;
  font-size: 14px;

  & th:first-child {
    border-radius: 4px 0 0 0;
  }

  & th:last-child {
    border-radius: 0 4px 0 0;
  }
`;

const Tr = styled.tr`
  min-height: 52px;
  background-color: #f5f6f6;
  font-size: 15px;
  color: #323232;
  border-top: 1px solid #dadada;
`;

const Th = styled.th`
  text-align: left;
  padding: 17px 0 12px 0;
  vertical-align: top;
  font-weight: bold;
`;

const ThTitle = styled(Th)`
  padding-left: 15px;
`;

const ThYear = styled(Th)`
  width: 56px;

  @media (max-width: 1025px) {
    width: 47px;
  }
`;

const ThPrice = styled(Th)`
  width: 116px;

  @media (max-width: 1025px) {
    width: 107px;
  }
`;

const ThColor = styled(Th)`
  width: 64px;

  @media (max-width: 1025px) {
    width: 48px;
  }
`;

const ThStatus = styled(Th)`
  width: 122px;

  @media (max-width: 1025px) {
    width: 120px;
  }
`;

const ThDelete = styled(Th)`
  width: 116px;

  @media (max-width: 1025px) {
    width: 94px;
  }
`;

const Td = styled.td`
  padding-top: 12px;
  padding-bottom: 16px;
  vertical-align: top;
  word-break: break-word;
`;

const TdTitle = styled(Td)`
  padding-top: 15px;
  padding-left: 13px;
  padding-right: 15px;
`;

const TdYear = styled(Td)`
  padding-top: 16px;
`;

const TdColor = styled(Td)`
  display: flex;
  justify-content: center;
  padding-top: 14px;
  padding-right: 27px;

  @media (max-width: 1025px) {
    padding-right: 12px;
  }
`;

const TdStatus = styled(Td)`
  margin-top: 15px;
`;

const TdPrice = styled(Td)`
  padding-top: 16px;
`;

const TdDelete = styled(Td)``;

const DeleteButton = styled.button`
  padding: 5px 15px;
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
  margin: 0;
  font-size: 15px;
  font-weight: 300;
  color: #323232;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.p`
  margin-top: 9px;
  margin-bottom: 0;
  font-size: 13px;
  color: #8b8b8b;
`;
