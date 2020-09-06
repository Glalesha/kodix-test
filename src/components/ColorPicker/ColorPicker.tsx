import React from "react";
import styled from "styled-components";

const ColorPicker: React.FC = () => {
  const colors = [
    { name: "white", code: "#FFFFFF", border: "#8B8B8B" },
    {
      name: "black",
      code: "#000000",
    },
    {
      name: "grey",
      code: "#C4C4C4",
    },
    {
      name: "red",
      code: "#DD1C10",
    },
    {
      name: "green",
      code: "#77CF61",
    },
  ];

  return (
    <ColorPickContainer>
      <ColorTitle>Цвет</ColorTitle>
      <ColorsList>
        {colors.map((color) => {
          return (
            <ColorItem>
              <ColorInput
                type="radio"
                id={color.name}
                name="color"
              ></ColorInput>
              <ColorLabel
                htmlFor={color.name}
                code={color.code}
                borderColor={color.border}
              ></ColorLabel>
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

const ColorLabel = styled.label<any>`
  display: block;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: ${(props: any) => props.code};
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  cursor: pointer;
`;
