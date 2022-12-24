import { applyDecorators } from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";

export function APIQueryProperty<T>(query: (keyof T)[]) {
  const apiQueries = query.map((key: keyof T) =>
    ApiQuery({ name: String(key), required: false }),
  );

  return applyDecorators(...apiQueries);
}
