import React, { useEffect } from "react";
import styled from "styled-components";
import fetchCars from "../../store/actions/fetchCars";
import deleteCar from "../../store/actions/deleteCar";
import { connect } from "react-redux";
import { CarType, RootState } from "../../types";
import CarsTable from "../CarsTable/CarsTable";
import CarsList from "../CarsList/CarsList";

interface Props {
  fetchCars(): void;
  deleteCar(carId: number): void;
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
      <OnlyDesktop>
        <CarsTable
          cars={cars}
          statusHandler={statusHandler}
          deleteCar={(carId: number) => deleteCar(carId)}
        ></CarsTable>
      </OnlyDesktop>
      <OnlyMobile>
        <CarsList
          cars={cars}
          statusHandler={statusHandler}
          deleteCar={(carId: number) => deleteCar(carId)}
        ></CarsList>
      </OnlyMobile>
    </Wrapper>
  );
};

export default connect(
  (state: RootState) => {
    return {
      cars: state.cars,
    };
  },
  { fetchCars, deleteCar }
)(CarsInStock);

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 266px;

  @media (max-width: 720px) {
    margin-bottom: 0;
  }
`;

const Caption = styled.h2`
  position: relative;
  margin: 0 10px 33px 10px;
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

  @media (max-width: 720px) {
    margin-bottom: 20px;
  }
`;

const OnlyDesktop = styled.div`
  padding-right: 10px;
  padding-left: 10px;

  @media (max-width: 720px) {
    display: none;
  }
`;

const OnlyMobile = styled.div`
  display: none;

  @media (max-width: 720px) {
    display: block;
  }
`;
