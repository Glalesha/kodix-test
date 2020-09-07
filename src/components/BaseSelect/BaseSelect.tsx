import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { OptionType } from "../../types";

interface Props {
  options: Array<OptionType>;
  onChange: any;
  selected: any;
  error: string;
}

const BaseSelect: React.FC<Props> = ({
  options,
  onChange,
  selected,
  error,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const select = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      if (select.current) {
        !select.current.contains(e.target) && setIsOpened(false);
      }
    });
  });

  const handleOptionClick = (e: any, option: OptionType) => {
    setIsOpened(false);
    onChange(option);
  };

  return (
    <Wrapper>
      <Select ref={select}>
        <Selected onClick={() => setIsOpened(!isOpened)}>
          <SelectedText>{selected.name}</SelectedText>
          <Arrow isOpened={isOpened}></Arrow>
        </Selected>
        <OptionsWrapper>
          <OptionsList isOpened={isOpened}>
            {options.map((option, index) => {
              return (
                <OptionItem key={index}>
                  <Option
                    data-value={option.value}
                    onClick={(e: any) => handleOptionClick(e, option)}
                  >
                    {option.name}
                  </Option>
                </OptionItem>
              );
            })}
          </OptionsList>
        </OptionsWrapper>
      </Select>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </Wrapper>
  );
};

export default BaseSelect;

const Wrapper = styled.div`
  position: relative;
`;

const Select = styled.div`
  position: relative;
  height: 40px;
`;

const Selected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px 8px;
  font-size: 14px;
  color: #8b8b8b;
  border: 1px solid #dadada;
  cursor: pointer;
`;

const SelectedText = styled.span``;

const Arrow = styled.div<any>`
  margin-right: 10px;
  transform: ${(props) => (props.isOpened ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s;

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
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 16px 10px 14px;
  border: 1px solid #dadada;
  border-top: 2px solid #282d30;
  background-color: #ffffff;
  transform: ${(props) => (props.isOpened ? "" : "translateY(-100%)")};
  transition: transform 0.3s;
  cursor: pointer;
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

const ErrorMessage = styled.p`
  position: absolute;
  color: #dd1c10;
`;
