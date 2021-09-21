export enum ErrorMessage {
  InitializationError = 'Initialization Failed',
}

export class InitializationError extends Error {
  constructor(details?: string) {
    super(details)
    this.name = ErrorMessage.InitializationError
  }
}