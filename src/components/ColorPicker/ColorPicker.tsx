import React from "react";
import styled from "styled-components";
import { ColorLabel } from "../BaseColor/BaseColor";

interface Props {
  onChange: any;
  value: string;
}

const ColorPicker: React.FC<Props> = ({ onChange, value }) => {
  const colors = ["white", "black", "grey", "red", "green"];

  return (
    <ColorPickContainer>
      <ColorTitle>Цвет</ColorTitle>
      <ColorsList>
        {colors.map((color, index) => {
          return (
            <ColorItem key={index}>
              <ColorInput
                type="radio"
                id={color}
                name="color"
                onChange={onChange}
                checked={color === value}
                value={color}
              ></ColorInput>
              <ColorLabel htmlFor={color} color={color} as="label"></ColorLabel>
            </ColorItem>
          );
        })}
      </ColorsList>
    </ColorPickContainer>
  );
};

export default ColorPicker;

const ColorPickContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColorTitle = styled.p`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 14px;
  color: #8b8b8b;
`;

const ColorsList = styled.ul`
  display: flex;
`;

const ColorItem = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

const ColorInput = styled.input`
  display: none;

  &:checked ~ label {
    box-shadow: 0 0 0 3px #c3002f;
  }
`;
