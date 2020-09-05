import React, { useState } from "react";
import styled from "styled-components";

const CarsForm: React.FC<{}> = () => {
  const [nameValue, setNameValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  return (
    <Form>
      <InputBlock>
        <Input
          type="text"
          value={nameValue}
          onChange={(e: any) => setNameValue(e.target.value)}
        ></Input>
        <Label>
          <LabelContent>Название</LabelContent>
          <BottomBorder></BottomBorder>
        </Label>
      </InputBlock>
      <InputBlock>
        <Input
          type="number"
          value={yearValue}
          onChange={(e: any) => setYearValue(e.target.value)}
        ></Input>
        <Label>
          <LabelContent>Год</LabelContent>
          <BottomBorder></BottomBorder>
        </Label>
      </InputBlock>
      <InputBlock>
        <Input
          type="number"
          value={priceValue}
          onChange={(e: any) => setPriceValue(e.target.value)}
        ></Input>
        <Label>
          <LabelContent>Цена</LabelContent>
          <BottomBorder></BottomBorder>
        </Label>
      </InputBlock>
      <InputBlockFullWidth>
        <Input
          type="text"
          value={descriptionValue}
          onChange={(e: any) => setDescriptionValue(e.target.value)}
        ></Input>
        <Label>
          <LabelContent>Описание</LabelContent>
          <BottomBorder></BottomBorder>
        </Label>
      </InputBlockFullWidth>
      <ColorPickContainer>
        <Text>Цвет</Text>
        <ColorsList>
          <WhiteColor></WhiteColor>
          <BlackColor></BlackColor>
        </ColorsList>
      </ColorPickContainer>
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

const InputBlock = styled.div`
  position: relative;
`;

const InputBlockFullWidth = styled(InputBlock)`
  grid-column: 1/4;
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid #dadada;
  outline: none;

  &:focus ~ label div,
  &:not([value=""]) ~ label div {
    &:before {
      border-color: #282d30;
      transform: translateX(0);
    }

    &:after {
      border-color: #282d30;
      transform: translateX(0);
    }
  }

  &:focus ~ label p,
  &:not([value=""]) ~ label p {
    transform: translateY(-33px);
  }

  &:hover ~ label div {
    &:before {
      transform: translateX(0);
    }

    &:after {
      transform: translateX(0);
    }
  }
`;

const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  pointer-events: none;
`;

const LabelContent = styled.p`
  font-size: 14px;
  transition: transform 0.3s;
`;

const BottomBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    border-bottom: 2px solid #c3002f;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 100%;
    border-bottom: 2px solid #c3002f;
    transform: translateX(100%);
    transition: transform 0.3s;
  }
`;

const ColorPickContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 14px;
`;

const ColorsList = styled.ul`
  display: flex;
`;

const WhiteColor = styled.p``

const BlackColor = styled.p``
