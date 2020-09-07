import React, { useEffect } from "react";
import styled from "styled-components";
import fetchCars from "../../store/actions/fetchCars";
import deleteCar from "../../store/actions/deleteCar";
import { connect } from "react-redux";
import { CarType } from "../../types";
import { BaseColor } from "../BaseColor/BaseColor";
import { addSpacesInNumber } from "../../utils";

interface Props {
  fetchCars: any;
  deleteCar: any;
  cars: CarType[];
}

const CarsInStock: React.FC<Props> = ({ cars, fetchCars, deleteCar }) => {
  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const statusHandler = (status: string) => {
    if (status === "pednding") {
      return "Ожидается";
    } else if (status === "in_stock") {
      return "В наличии";
    } else if (status === "out_of_stock") {
      return "Нет в наличии";
    }
  };

  return (
    <Wrapper>
      <Caption>Автомобили в наличии</Caption>
      <Table>
        <thead>
          <TrHead>
            <Th>Название</Th>
            <Th>Год</Th>
            <Th>Цвет</Th>
            <ThStatus>Статус</ThStatus>
            <Th>Цена</Th>
            <Th></Th>
          </TrHead>
        </thead>
        <tbody>
          {cars.map((car: CarType) => {
            console.log(car);
            return (
              <Tr key={car.id}>
                <TdDescription>
                  <Title>{car.title}</Title>
                  {car.description ? (
                    <Description>{car.description}</Description>
                  ) : null}
                </TdDescription>
                <TdYear>{car.year}</TdYear>
                <TdColor>
                  <BaseColor color={car.color}></BaseColor>
                </TdColor>
                <TdStatus>{statusHandler(car.status)}</TdStatus>
                <Td>{addSpacesInNumber(car.price.toString())} руб.</Td>
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
    </Wrapper>
  );
};

export default connect(
  (state: any) => {
    return {
      cars: state.cars,
    };
  },
  { fetchCars, deleteCar }
)(CarsInStock);

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 266px;
`;

const Caption = styled.h2`
  position: relative;
  margin-top: 0;
  margin-bottom: 33px;
  padding-left: 15px;
  font-weight: bold;
  font-size: 19px;
  text-transform: uppercase;

  &:before {
    content: "";
    position: absolute;
    top: 1px;
    left: 0;
    width: 3px;
    height: 18px;
    background-color: #8b8b8b;
  }
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
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
  padding: 17px 0 12px 16px;
  vertical-align: top;
  font-weight: bold;
`;

const ThStatus = styled(Th)`
  padding-left: 32px;
`;

const Td = styled.td`
  padding-top: 16px;
  padding-left: 15px;
  padding-bottom: 16px;
  vertical-align: top;
`;

const TdDescription = styled(Td)`
  width: 469px;
`;

const TdYear = styled(Td)``;

const TdColor = styled(Td)`
  display: flex;
  justify-content: center;
  padding-top: 14px;
  padding-left: 27px;
`;

const TdStatus = styled(Td)`
  padding-left: 32px;
`;

const TdDelete = styled(Td)`
  padding: 12px 26px 15px 16px;
`;

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
`;

const Description = styled.p`
  margin-top: 9px;
  margin-bottom: 0;
  font-size: 13px;
  color: #8b8b8b;
`;
