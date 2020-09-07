import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  value: string;
  type: string;
  fullWidth?: boolean;
  onChange?: any;
  required: boolean;
}

const BaseInput: React.FC<Props> = ({
  name,
  value,
  type,
  fullWidth,
  onChange,
  required,
}) => {
  return (
    <InputBlock fullWidth={fullWidth}>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      ></Input>
      <Label>
        <LabelContent>{name}</LabelContent>
        <BottomBorder></BottomBorder>
      </Label>
    </InputBlock>
  );
};

export default BaseInput;

const InputBlock = styled.div<any>`
  position: relative;
  grid-column: ${(props) => (props.fullWidth ? "1/4" : null)};
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid #dadada;
  font-size: 18px;
  color: #282d30;
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
    transform: translateY(-35px);
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
  color: #8b8b8b;
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
