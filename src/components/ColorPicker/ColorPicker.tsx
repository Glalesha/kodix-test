import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { ColorLabel } from "../BaseColor/BaseColor";

interface Props {
  onChange(e: ChangeEvent): void;
  value: string;
  error: string;
}

const ColorPicker: React.FC<Props> = ({ onChange, value, error }) => {
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
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </ColorPickContainer>
  );
};

export default ColorPicker;

const ColorPickContainer = styled.div`
  position: relative;
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

const ErrorMessage = styled.p`
  position: absolute;
  top: 40px;
  color: #dd1c10;
`;
