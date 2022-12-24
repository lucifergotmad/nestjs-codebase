import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty } from "class-validator";
import { TNumberInput } from "../types/number-input.type";

export function IsRequiredNumber(
  options: Omit<TNumberInput, "uppercase"> = {},
) {
  const { example = 0, description = "", min: minimum, max: maximum } = options;

  const minOpts = minimum ? { minimum } : {};
  const maxOpts = maximum ? { maximum } : {};

  const decorators = [
    IsNumber(),
    IsNotEmpty(),
    ApiProperty({ example, description, ...minOpts, ...maxOpts }),
  ];

  return applyDecorators(...decorators);
}
