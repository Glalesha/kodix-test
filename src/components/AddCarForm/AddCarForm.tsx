import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import ColorPicker from "../ColorPicker/ColorPicker";
import BaseInput from "../BaseInput/BaseInput";
import BaseSelect from "../BaseSelect/BaseSelect";
import addCar from "../../store/actions/addCar";
import { connect } from "react-redux";
import { getNewId } from "../../utils";
import { CarType, Status, RootState } from "../../types";
import { addSpacesInNumber } from "../../utils";

interface Props {
  addCar(car: CarType): void;
  cars: CarType[];
}

const AddCarForm: React.FC<Props> = ({ addCar, cars }) => {
  const [titlValue, setTitleValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [statusValue, setStatusValue] = useState({ name: "Статус", value: "" });
  const [statusError, setStatusError] = useState("");
  const [colorError, setColorError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!statusValue.value || !colorValue) {
      if (!statusValue.value) {
        setStatusError("Пожалуйста, выберите статус автомобиля");
      } else {
        setStatusError("");
      }

      if (!colorValue) {
        setColorError("Пожалуйста, выберите цвет автомобиля");
      } else {
        setColorError("");
      }

      return;
    }

    const carInfo = {
      title: titlValue,
      year: +yearValue,
      description: descriptionValue,
      price: +priceValue.replace(/\D/g, ""),
      color: colorValue,
      status: statusValue.value,
      id: getNewId(cars),
    };

    addCar(carInfo);

    setTitleValue("");
    setYearValue("");
    setPriceValue("");
    setDescriptionValue("");
    setColorValue("");
    setStatusValue({ name: "Статус", value: "" });
    setStatusError("");
    setColorError("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FullWidthMobileWrapper>
        <BaseInput
          name="Название"
          type="text"
          parentOnChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitleValue(e.currentTarget.value)
          }
          value={titlValue}
          required={true}
        />
      </FullWidthMobileWrapper>
      <YearWrapper>
        <BaseInput
          name="Год"
          type="tel"
          parentOnChange={(e: ChangeEvent<HTMLInputElement>) => {
            setYearValue(e.target.value.replace(/\D/g, ""));
          }}
          value={yearValue}
          required={true}
        />
      </YearWrapper>
      <PriceWrapper>
        <BaseInput
          name="Цена"
          type="text"
          value={priceValue}
          required={true}
          parentOnChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPriceValue(addSpacesInNumber(e.currentTarget.value));
          }}
          addSeparator={true}
        />
      </PriceWrapper>
      <FullWidthWrapper>
        <BaseInput
          name="Описание"
          type="text"
          parentOnChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDescriptionValue(e.target.value)
          }
          value={descriptionValue}
          required={true}
        />
      </FullWidthWrapper>
      <FullWidthMobileWrapper>
        <ColorPickerWrapper>
          <ColorPicker
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setColorValue(e.target.value)
            }
            value={colorValue}
            error={colorError}
          ></ColorPicker>
        </ColorPickerWrapper>
      </FullWidthMobileWrapper>
      <BaseSelect
        options={[
          { name: "В наличии", value: "in_stock" },
          { name: "Ожидается", value: "pednding" },
          { name: "Нет в наличии", value: "out_of_stock" },
        ]}
        parentOnChange={(selectedStatus: Status) =>
          setStatusValue(selectedStatus)
        }
        selected={statusValue}
        error={statusError}
      />
      <SendButton type="submit">
        <span>Отправить</span>
      </SendButton>
    </Form>
  );
};

export default connect(
  (state: RootState) => {
    return {
      cars: state.cars,
    };
  },
  { addCar }
)(AddCarForm);

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  width: 100%;
  margin-bottom: 134px;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 1025px) {
    margin-bottom: 61px;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 34px;
  }
`;

const FullWidthWrapper = styled.div`
  grid-column: 1/-1;
`;

const FullWidthMobileWrapper = styled.div`
  @media (max-width: 720px) {
    grid-column: 1/-1;
  }
`;

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  background-color: #c3002f;
  outline: none;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    width: 24px;
    height: 15px;
    margin-left: 13px;
    background-image: url("/images/send-arrow.svg");
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const ColorPickerWrapper = styled.div`
  margin-top: 13px;

  @media (max-width: 720px) {
    margin-top: 5px;
  }
`;

const PriceWrapper = styled.div`
  @media (max-width: 720px) {
    grid-row: 2;
  }
`;

const YearWrapper = styled.div`
  @media (max-width: 720px) {
    grid-column: 2/3;
  }
`;
