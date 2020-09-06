import { ADD_CAR } from "../../consts";

const addCar = (carInfo: any) => {
  return {
    type: ADD_CAR,
    payload: {
      carInfo,
    },
  };
};

export default addCar;
