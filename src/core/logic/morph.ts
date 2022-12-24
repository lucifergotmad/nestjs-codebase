import { TransformFnParams } from "class-transformer";

export class Morph {
  static removeKey(props: { [key: string]: any }, matcher?: string) {
    const refProps = { ...props };
    Object.keys(refProps).forEach(
      (key: string) => refProps[key] === matcher && delete refProps[key],
    );
    return refProps;
  }

  static stringToDatetime({ value }: TransformFnParams) {
    const isMatched = /\d{4}-\d{2}-\d{2}/.test(value);
    return new Date(value);
  }
}
