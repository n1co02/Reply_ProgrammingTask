export interface User {
  id: number;
  name: string;
  address: string;
  age: number;
  demands?: Demand[];
}

export interface Demand {
  id?: number;
  user_id: number;
  pickupLocation: string;
  dropoffLocation: string;
  time: Date;
  passengers: number;
}

export interface Car {
  id: number;
  engineType: string;
  availableSeats: number;
  locationType: string;
  locationCoordinates: number[];
  status: string;
}
export interface CreateCarInput {
  engineType: string;
  availableSeats: number;
  locationType: string;
  locationCoordinates: number[];
  status: string;
}
export interface CreateDemandInput {
  user_id: number;
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
