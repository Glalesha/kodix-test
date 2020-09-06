import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { OptionType } from "../../types";

interface Props {
  options: Array<OptionType>;
  defaultSelected: string;
  onChange: any;
  value: string;
}

const BaseSelect: React.FC<Props> = ({
  options,
  defaultSelected,
  onChange,
  value,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    name: defaultSelected,
    value: "",
  });

  const select = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      if (select.current) {
        !select.current.contains(e.target) && setIsOpened(false);
      }
    });
  });

  const handleOptionClick = (option: OptionType) => {
    setSelectedValue(option);
    setIsOpened(false);
    onChange(selectedValue.value);
  };

  return (
    <Select ref={select}>
      <Selected onClick={() => setIsOpened(!isOpened)}>
        <SelectedText>{selectedValue.name}</SelectedText>
        <Arrow></Arrow>
      </Selected>
      <OptionsWrapper>
        <OptionsList isOpened={isOpened}>
          {options.map((option, index) => {
            return (
              <OptionItem key={index}>
                <Option
                  data-value={option.value}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.name}
                </Option>
              </OptionItem>
            );
          })}
        </OptionsList>
      </OptionsWrapper>
    </Select>
  );
};

export default BaseSelect;

const Select = styled.div`
  position: relative;
  height: 40px;
  cursor: pointer;
`;

const Selected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #8b8b8b;
  border: 1px solid #dadada;
`;

const SelectedText = styled.span``;

const Arrow = styled.div`
  margin-right: 10px;

  &:before {
    content: "";
    display: block;
    border-top: 4px solid black;
    border-left: 4px solid rgba(0, 0, 0, 0);
    border-right: 4px solid rgba(0, 0, 0, 0);
    border-bottom: none;
  }
`;

const OptionsWrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
`;

const OptionsList = styled.ul<any>`
  width: 100%;
  padding: 12px 10px 20px;
  border: 1px solid #dadada;
  border-top: 2px solid #282d30;
  transform: ${(props) => (props.isOpened ? "" : "translateY(-100%)")};
  transition: transform 0.3s;
`;

const OptionItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Option = styled.div`
  height: 20px;
  color: #8b8b8b;
  font-size: 14px;

  &:hover {
    color: #282d30;
  }
`;
