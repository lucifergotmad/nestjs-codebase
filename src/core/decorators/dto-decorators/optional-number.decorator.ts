import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";
import { TNumberInput } from "../types/number-input.type";

export function IsOptionalNumber(
  options: Omit<TNumberInput, "uppercase"> = {},
) {
  const { example = 0, description = "", min: minimum, max: maximum } = options;

  const minOpts = minimum ? { minimum } : {};
  const maxOpts = maximum ? { maximum } : {};

  const decorators = [
    IsNumber(),
    IsOptional(),
    ApiProperty({
      example,
      description,
      ...minOpts,
      ...maxOpts,
      required: false,
    }),
  ];

  return applyDecorators(...decorators);
}
