import { CarType } from "../../types";
import { GET_CARS, DELETE_CAR, ADD_CAR } from "../../consts";

const initState: any = {
  cars: [],
};

export default function rootReducer(state = initState, action: any) {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload.cars,
      };

    case DELETE_CAR:
      return {
        ...state,
        cars: [
          ...state.cars.filter((car: CarType) => {
            return car.id !== action.payload.carId;
          }),
        ],
      };

    case ADD_CAR:
      console.log(action);
      return {
        ...state,
        cars: [...state.cars, action.payload.carInfo],
      };

    default:
      return state;
  }
}
