import { ADD_CAR } from "../../consts";

const addCar = (carInfo: any) => {
  console.log(134);
  return {
    type: ADD_CAR,
    payload: {
      carInfo,
    },
  };
};

export default addCar;
