import { applyDecorators, Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

export function ControllerProperty(name: string, ...tags: Array<string>) {
  return applyDecorators(Controller(name), ApiTags(...tags));
}
