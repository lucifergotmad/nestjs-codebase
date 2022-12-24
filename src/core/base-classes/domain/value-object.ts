import { Guard } from "src/core/logic/guard";
import { DomainPrimitive } from "../types/domain-primitive.type";
import { TPrimitive } from "../types/primitive.type";

type ValueObjectProps<T> = T extends TPrimitive | Date ? DomainPrimitive<T> : T;

export abstract class ValueObject<T> {
  protected readonly props: ValueObjectProps<T>;

  constructor(props: ValueObjectProps<T>) {
    this.checkIfEmpty(props);
    this.validate(props);
    this.props = props;
  }

  protected abstract validate(props: ValueObjectProps<T>): void;

  static isValueObject(obj: unknown): obj is ValueObject<unknown> {
    return obj instanceof ValueObject;
  }

  private checkIfEmpty(props: ValueObjectProps<T>): void {
    if (
      Guard.isEmpty(props) ||
      (this.isDomainPrimitive(props) && Guard.isEmpty(props.value))
    ) {
      throw new Error("Property cannot be empty");
    }
  }

  private isDomainPrimitive(
    obj: unknown,
  ): obj is DomainPrimitive<T & (TPrimitive | Date)> {
    if (Object.prototype.hasOwnProperty.call(obj, "value")) {
      return true;
    }
    return false;
  }
}
