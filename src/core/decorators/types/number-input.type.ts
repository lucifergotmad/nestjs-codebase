import { TPrimitiveInput } from "./primitive-input.type";

export type TNumberInput = Omit<TPrimitiveInput, "uppercase"> & {
  max?: number;
  min?: number;
};
