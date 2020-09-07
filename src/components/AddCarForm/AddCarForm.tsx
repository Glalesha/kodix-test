import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ColorPicker from "../ColorPicker/ColorPicker";
import BaseInput from "../BaseInput/BaseInput";
import BaseSelect from "../BaseSelect/BaseSelect";
import addCar from "../../store/actions/addCar";
import addError from "../../store/actions/addError";
import { connect } from "react-redux";
import { getNewId } from "../../utils";
import { CarType } from "../../types";
import { addSpacesInNumber } from "../../utils";

interface Props {
  addCar: any;
  addError: any;
  cars: CarType[];
}

const AddCarForm: React.FC<Props> = ({ addCar, cars, addError }) => {
  const [titlValue, setTitleValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [statusValue, setStatusValue] = useState({ name: "Статус", value: "" });
  const [statusError, setStatusError] = useState("");
  const [colorError, setColorError] = useState("");

  useEffect(() => {
    setPriceValue(addSpacesInNumber(priceValue));
  }, [priceValue]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (statusValue.value === "" && colorValue === "") {
      if (statusValue.value === "") {
        setStatusError("Пожалуйста, выберите статус автомобиля");
      }

      if (colorValue === "") {
        setColorError("Пожалуйста, выберите цвет автомобиля");
      }

      return;
    }

    const carInfo = {
      title: titlValue,
      year: yearValue,
      description: descriptionValue,
      price: priceValue,
      color: colorValue,
      status: statusValue.value,
      id: getNewId(cars),
    };

    addCar(carInfo);

    setTitleValue("");
    setYearValue("");
    setPriceValue("");
    setDescriptionValue("");
    setColorValue("");
    setStatusValue({ name: "Статус", value: "" });
    setStatusError("");
    setColorError("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <BaseInput
        name="Название"
        type="text"
        onChange={(e: any) => setTitleValue(e.target.value)}
        value={titlValue}
        required={true}
      />
      <BaseInput
        name="Год"
        type="number"
        onChange={(e: any) => setYearValue(e.target.value)}
        value={yearValue}
        required={true}
      />
      <BaseInput
        name="Цена"
        type="text"
        value={priceValue}
        required={true}
        onChange={(e: any) => setPriceValue(e.target.value)}
      />
      <BaseInput
        name="Описание"
        type="text"
        onChange={(e: any) => setDescriptionValue(e.target.value)}
        value={descriptionValue}
        fullWidth={true}
        required={true}
      />
      <ColorPickerWrapper>
        <ColorPicker
          onChange={(e: any) => setColorValue(e.target.value)}
          value={colorValue}
          error={colorError}
        ></ColorPicker>
      </ColorPickerWrapper>
      <BaseSelect
        options={[
          { name: "В наличии", value: "in_stock" },
          { name: "Ожидается", value: "pednding" },
          { name: "Нет в наличии", value: "out_of_stock" },
        ]}
        onChange={(selectedStatus: any) => setStatusValue(selectedStatus)}
        selected={statusValue}
        error={statusError}
      />
      <SendButton type="submit">Отправить</SendButton>
    </Form>
  );
};

export default connect(
  (state: any) => {
    return {
      cars: state.cars,
    };
  },
  { addCar, addError }
)(AddCarForm);

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  width: 100%;
  margin-bottom: 134px;
`;

const SendButton = styled.button`
  height: 44px;
  padding-left: 88px;
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  background-color: #c3002f;
  background-image: url("/images/send-arrow.svg");
  background-repeat: no-repeat;
  background-position: center right 97px;
  outline: none;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
`;

const ColorPickerWrapper = styled.div`
  margin-top: 13px;
`;
