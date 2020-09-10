export type CarsType = Array<CarType>;

export interface OptionType {
  name: string;
  value: string;
}

export interface CarType {
  id: number;
  title: string;
  description: string;
  year: number;
  color: string;
  status: string;
  price: number;
}

export interface Status {
  value: string;
  name: string;
}

export interface RootState {
  cars: CarsType;
}

export type StatusHandler = (
  status: string
) => "Ожидается" | "В наличии" | "Нет в наличии" | undefined;

export interface Action {
  type: string;
  payload?: any;
}

export interface FetchCarsAction {
  type: string;
}

export interface SelectedType { 
  value: string;
  name: string;
}