import { TransformFnParams } from "class-transformer";

export class TransformDTO {
  static stringToMongoDateFilter({ value }: TransformFnParams) {
    const isMatched = /\d{4}-\d{2}-\d{2}/.test(value);
    if (isMatched) {
      const startDate = new Date(value);
      const endDate = new Date(new Date(value).setHours(24));
      return new DateMongoose(startDate, endDate);
    }
    return value;
  }

  static stringToBoolean({ value }: TransformFnParams) {
    return value === "true" || value === "True";
  }
}

class DateMongoose {
  constructor(public gte: Date, public lte: Date) {}
}
