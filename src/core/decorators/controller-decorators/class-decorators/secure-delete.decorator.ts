import { applyDecorators, Delete, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/infra/auth/jwt-auth.guard";

export function SecureDelete(path = "") {
  return applyDecorators(
    UseGuards(JwtAuthGuard),
    ApiBearerAuth("JWT"),
    ApiUnauthorizedResponse({ description: "Unauthorized User" }),
    Delete(path),
  );
}
