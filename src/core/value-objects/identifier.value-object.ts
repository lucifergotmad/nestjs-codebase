import { ValueObject } from "../base-classes/domain/value-object";
import { DomainPrimitive } from "../base-classes/types/domain-primitive.type";

export class Identifier extends ValueObject<string> {
  constructor(value: string) {
    super({ value });
  }

  get value(): string {
    return this.props.value;
  }

  equals(id?: Identifier): boolean {
    if (id === null || id === undefined) {
      return false;
    }
    if (!(id instanceof this.constructor)) {
      return false;
    }
    return id.value === this.value;
  }

  validate({ value }: DomainPrimitive<string>) {
    if (value === null || value === undefined) {
      throw new Error("identifier should not be empty!");
    }
  }
}
