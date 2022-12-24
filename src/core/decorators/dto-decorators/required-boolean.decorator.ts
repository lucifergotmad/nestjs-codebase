import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty } from "class-validator";
import { TPrimitiveInput } from "../types/primitive-input.type";

export function IsRequiredBoolean(
  options: Omit<TPrimitiveInput, "uppercase"> = {},
) {
  const { example = false, description = "" } = options;

  const decorators = [
    IsBoolean(),
    IsNotEmpty(),
    ApiProperty({ example, description }),
  ];

  return applyDecorators(...decorators);
}
