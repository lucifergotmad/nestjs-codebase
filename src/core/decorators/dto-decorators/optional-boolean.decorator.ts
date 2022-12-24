import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional } from "class-validator";
import { TPrimitiveInput } from "../types/primitive-input.type";

export function IsOptionalBoolean(
  options: Omit<TPrimitiveInput, "uppercase"> = {},
) {
  const { example = false, description = "" } = options;

  const decorators = [
    IsBoolean(),
    IsOptional(),
    ApiProperty({ example, description, required: false }),
  ];

  return applyDecorators(...decorators);
}
