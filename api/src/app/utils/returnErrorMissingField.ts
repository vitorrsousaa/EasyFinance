import AppError from '../error';

interface ObjectWithKeys {
  [key: string]: any
}

export default function returnErrorMissingField(objectToCheck: ObjectWithKeys, requiredKeys: string[]): void {
  for (const key of requiredKeys) {
    if (!(key in objectToCheck)) {
      throw new AppError(`${key} is required!`, 404);
    }
  }
}
