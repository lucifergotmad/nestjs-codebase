import { TPrimitiveInput } from "./primitive-input.type";

export type TStringInput = TPrimitiveInput & {
  maxLength?: number;
  minLength?: number;
};
