import { HttpStatus } from "../constants/error/status-code.const";
import { ExceptionBase } from "./exception.base";

export class ExceptionConflict extends ExceptionBase {
  status = HttpStatus.CONFLICT;
}
