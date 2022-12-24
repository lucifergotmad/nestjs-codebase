import { ValueObject } from "src/core/base-classes/domain/value-object";
import { DomainPrimitive } from "src/core/base-classes/types/domain-primitive.type";
import { Guard } from "src/core/logic/guard";
import { HashUtil } from "src/core/utils/modules/hash/hash.service";

export class Password extends ValueObject<string> {
  static hashUtils: HashUtil = new HashUtil();
  constructor(value: string) {
    super({ value });
  }

  get value() {
    return this.props.value;
  }

  protected validate({ value }: DomainPrimitive<string>) {
    if (Guard.isEmpty(value)) {
      throw new Error("Password tidak boleh kosong!");
    }
  }

  static async create(value: string) {
    const hashPassword = await this.hashUtils.generate(value);
    return new Password(hashPassword);
  }
}
