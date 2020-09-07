import { CarType } from "../../types";
import { GET_CARS, DELETE_CAR, ADD_CAR, ADD_ERROR } from "../../consts";

const initState: any = {
  cars: [],
  errors: [],
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
      return {
        ...state,
        cars: [...state.cars, action.payload.carInfo],
      };

    case ADD_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload.errors],
      };

    default:
      return state;
  }
}
