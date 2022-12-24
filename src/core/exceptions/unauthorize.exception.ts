import { HttpStatus } from "../constants/error/status-code.const";
import { ExceptionBase } from "./exception.base";

export class ExceptionUnauthorize extends ExceptionBase {
  status = HttpStatus.UNAUTHORIZED;
}
