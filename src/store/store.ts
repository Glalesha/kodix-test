import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer as any, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
