import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import styled from "styled-components";

interface Props {
  name: string;
  value: string;
  type: string;
  parentOnChange?(e: ChangeEvent): void;
  required?: boolean;
  onKeyDown?(e: KeyboardEvent): void;
  addSeparator?: boolean;
}

const BaseInput: React.FC<Props> = ({
  name,
  value,
  type,
  parentOnChange,
  required,
  addSeparator,
}) => {
  const [oldCursorPosition, setOldCursorPosition] = useState(0);
  const [oldValue, setOldValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    const newCursorPosition: number =
      oldCursorPosition -
      Math.floor(oldCursorPosition / 4) +
      Math.floor(
        (oldCursorPosition + currentValue.length - oldValue.length) / 4
      ) +
      (+currentValue.replace(/ /g, "").length -
        +oldValue.replace(/ /g, "").length);

    if (inputRef.current !== null) {
      inputRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
    }
  }, [currentValue]);

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setOldCursorPosition(e.currentTarget.selectionEnd as any);
    setOldValue(e.currentTarget.value);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (addSeparator) {
      setCurrentValue(e.currentTarget.value);
    }
    parentOnChange!(e);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <InputBlock>
      <Input
        type={type}
        value={value}
        onChange={(e: ChangeEvent) => changeHandler(e as any)}
        required={required}
        onKeyDown={addSeparator ? keyDownHandler : () => {}}
        ref={inputRef}
      ></Input>
      <Label>
        <LabelContent>{name}</LabelContent>
        <BottomBorder></BottomBorder>
      </Label>
    </InputBlock>
  );
};

export default BaseInput;

const InputBlock = styled.div`
  position: relative;
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
