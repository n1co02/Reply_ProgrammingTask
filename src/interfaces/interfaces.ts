import {CarStatus, EngineType} from './enums';

export interface CreateCarInput {
  engineType: EngineType;
  availableSeats: number;
  locationType: string;
  locationCoordinates: number[];
  status: CarStatus;
}
export interface CreateDemandInput {
  user_id: number;
  car_id: number;
  pickupLocation: string;
  dropoffLocation: string;
  time: Date;
  passengers: number;
}
export interface UserInput {
  name: string;
  address: string;
  age: number;
}
