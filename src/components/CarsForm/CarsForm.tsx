import React, { useState } from "react";
import styled from "styled-components";
import ColorPicker from "../ColorPicker/ColorPicker";
import BaseInput from "../BaseInput/BaseInput";

const CarsForm: React.FC<{}> = () => {
  const [nameValue, setNameValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  return (
    <Form>
      <BaseInput
        name="название"
        type="text"
        onChange={(e: any) => setNameValue(e.target.value)}
        value={nameValue}
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
      <ColorPicker></ColorPicker>
      <SendButton>Отправить</SendButton>
    </Form>
  );
};

export default CarsForm;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  width: 958px;
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
`;
