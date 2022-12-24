import { applyDecorators, Patch, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/infra/auth/jwt-auth.guard";

export function SecurePatch(path = "") {
  return applyDecorators(
    UseGuards(JwtAuthGuard),
    ApiBearerAuth("JWT"),
    Patch(path),
  );
}
