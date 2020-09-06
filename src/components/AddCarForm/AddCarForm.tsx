import React, { useState } from "react";
import styled from "styled-components";
import ColorPicker from "../ColorPicker/ColorPicker";
import BaseInput from "../BaseInput/BaseInput";
import BaseSelect from "../BaseSelect/BaseSelect";
import addCar from "../../store/actions/addCar";
import { connect } from "react-redux";

interface Props {
  addCar: any;
}

const AddCarForm: React.FC<Props> = ({ addCar }) => {
  const [titlValue, setTitlValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [statusValue, setStatusValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const carInfo = {
      title: titlValue,
      year: yearValue,
      description: descriptionValue,
      price: priceValue,
      color: colorValue,
      status: statusValue,
    };

    addCar(carInfo);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <BaseInput
        name="название"
        type="text"
        onChange={(e: any) => setTitlValue(e.target.value)}
        value={titlValue}
      />
      <BaseInput
        name="год"
        type="number"
        onChange={(e: any) => setYearValue(e.target.value)}
        value={yearValue}
      />
      <BaseInput
        name="цена"
        type="number"
        onChange={(e: any) => setPriceValue(e.target.value)}
        value={priceValue}
      />
      <BaseInput
        name="описание"
        type="text"
        onChange={(e: any) => setDescriptionValue(e.target.value)}
        value={descriptionValue}
        fullWidth={true}
      />
      <ColorPicker
        onChange={(e: any) => setColorValue(e.target.value)}
        value={colorValue}
      ></ColorPicker>
      <BaseSelect
        options={[
          { name: "В наличии", value: "in_stock" },
          { name: "Ожидается", value: "pednding" },
          { name: "Нет в наличии", value: "out_of_stock" },
        ]}
        defaultSelected="Статус"
        onChange={(selectedStatus: string) => setStatusValue(selectedStatus)}
        value={statusValue}
      />
      <SendButton type="submit">Отправить</SendButton>
    </Form>
  );
};

export default connect(null, { addCar })(AddCarForm);

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  width: 100%;
  margin-bottom: 134px;
`;

const SendButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #c3002f;
  outline: none;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
`;
