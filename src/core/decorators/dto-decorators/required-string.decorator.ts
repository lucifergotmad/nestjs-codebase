import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { TStringInput } from "../types/string-input.type";

export function IsRequiredString(options: TStringInput = {}) {
  const {
    example = "",
    description = "",
    uppercase = false,
    maxLength = 255,
    minLength = 0,
  } = options;
  const decorators = [
    IsString(),
    IsNotEmpty(),
    ApiProperty({ example, description, maxLength, minLength }),
  ];

  if (uppercase)
    decorators.push(
      Transform(({ value }) =>
        typeof value === "string" ? String(value).toUpperCase() : value,
      ),
    );

  return applyDecorators(...decorators);
}
