import { applyDecorators, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/infra/auth/jwt-auth.guard";

export function SecurePost(path = "") {
  return applyDecorators(
    UseGuards(JwtAuthGuard),
    ApiBearerAuth("JWT"),
    ApiUnauthorizedResponse({ description: "Unauthorized User" }),
    Post(path),
  );
}
