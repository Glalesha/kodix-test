import { DELETE_CAR } from "../../consts";

const deleteCar = (carId: number) => {
  return {
    type: DELETE_CAR,
    payload: {
      carId,
    },
  };
};

export default deleteCar;
