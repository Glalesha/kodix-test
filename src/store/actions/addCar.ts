import { ADD_CAR } from "../../consts";
import { CarType } from "../../types";

const addCar = (carInfo: CarType) => {
  return {
    type: ADD_CAR,
    payload: {
      carInfo,
    },
  };
};

export default addCar;
