import { FETCH_CARS } from "../../consts";

const fetchCars = () => {
  return {
    type: FETCH_CARS,
  };
};

export default fetchCars;
