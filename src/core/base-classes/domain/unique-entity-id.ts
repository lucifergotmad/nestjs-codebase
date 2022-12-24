import { Identifier } from "src/core/value-objects/identifier.value-object";
import { v4 as uuidv4 } from "uuid";
export class UniqueEntityID extends Identifier {
  constructor(id?: string) {
    super(id ? id : uuidv4());
  }
}
