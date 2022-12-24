import { HttpStatus } from "../constants/error/status-code.const";
import { ExceptionBase } from "./exception.base";

export class ExceptionNotFound extends ExceptionBase {
  status = HttpStatus.NOT_FOUND;
}
