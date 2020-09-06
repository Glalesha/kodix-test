import React, { useEffect } from "react";
import styled from "styled-components";
import fetchCars from "../../store/actions/fetchCars";
import deleteCar from "../../store/actions/deleteCar";
import { connect } from "react-redux";
import { CarType } from "../../types";
import { BaseColor } from "../BaseColor/BaseColor";

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
      <Title>Автомобили в наличии</Title>
      <Table>
        <thead>
          <TrHead>
            <Th>Название</Th>
            <Th>Год</Th>
            <Th>Цвет</Th>
            <Th>Статус</Th>
            <Th>Цена</Th>
            <Th></Th>
          </TrHead>
        </thead>
        <tbody>
          {cars.map((car: CarType) => {
            return (
              <Tr key={car.id}>
                <Td>{car.title}</Td>
                <Td>{car.year}</Td>
                <Td>
                  <BaseColor color={car.color}></BaseColor>
                </Td>
                <Td>{statusHandler(car.status)}</Td>
                <Td>{car.price}</Td>
                <Td>
                  <DeleteButton onClick={() => deleteCar(car.id)}>
                    Удалить
                  </DeleteButton>
                </Td>
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

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
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
  text-align: left;
  min-height: 52px;
  background-color: #f5f6f6;
  font-size: 15px;
  color: #323232;
`;

const Th = styled.th`
  padding: 12px 30px 12px 16px;
`;

const Td = styled.td`
  padding: 16px 30px 15px 16px;
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
