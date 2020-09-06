import { all, takeEvery, call, put } from "redux-saga/effects";
import { FETCH_CARS, DELETE_CAR } from "../consts";
import getCars from "./actions/getCars";
import axios from "axios";

export default function* rootSaga() {
  yield all([fetchCars(), deleteCar()]);
}

function* fetchCars() {
  yield takeEvery(FETCH_CARS, fetchCarsAsync);
}

function* fetchCarsAsync(action: any) {
  try {
    const cars = yield call(async () => {
      const res = await axios.get(
        "https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json"
      );
      return res.data;
    });
    yield put(getCars(cars));
  } catch {}
}

function* deleteCar() {
  takeEvery(DELETE_CAR, deleteCarAsync);
}

function* deleteCarAsync(action: any) {
  try {
  } catch {}
}
