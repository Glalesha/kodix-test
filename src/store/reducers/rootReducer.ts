import { CarType, RootState } from "../../types";
import { GET_CARS, DELETE_CAR, ADD_CAR } from "../../consts";
import { Action } from "../../types";

const initState: RootState = {
  cars: [],
};

export default function rootReducer(state = initState, action: Action) {
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
      return {
        ...state,
        cars: [...state.cars, action.payload.carInfo],
      };

    default:
      return state;
  }
}
