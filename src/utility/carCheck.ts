import {CarStatus, EngineType} from '../interfaces/enums';

export const CarStatusCheck = (status: CarStatus) => {
  if (!Object.values(CarStatus).includes(status)) throw new Error('Invalid status');
  return;
};
export const EngineTypeCheck = (engineType: EngineType) => {
  if (!Object.values(EngineType).includes(engineType)) throw new Error('Invalid engine type');
  return;
};
