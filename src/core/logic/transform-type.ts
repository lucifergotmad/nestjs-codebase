export class TransformType {
  static DateRangeDTO() {
    return class {
      gte: Date;
      lte: Date;
    };
  }
}
