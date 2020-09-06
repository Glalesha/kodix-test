import { CarType } from "./../../types";
import { GET_CARS } from "../../consts";

const getCars = (cars: CarType[]) => {
  return {
    type: GET_CARS,
    payload: {
      cars,
    },
  };
};

export default getCars;
