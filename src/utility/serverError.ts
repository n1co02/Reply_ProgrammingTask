export default class ServerError extends Error {
  // public constructor(message: 'TEST_ERROR_UNO', info: {info: number});
  public constructor(message: 'TEST_ERROR', info: {info: number});
  public constructor(message: 'SCOOTERS_NOT_FOUND', info: {info: number});
  public constructor(message: 'INTERNAL_SERVER_ERROR', info: {info: number});
  public constructor(message: string, public readonly info: Record<string, unknown> = {}) {
    super(message);
  }
}
