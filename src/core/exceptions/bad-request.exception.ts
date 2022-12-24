import { HttpStatus } from "../constants/error/status-code.const";
import { ExceptionBase } from "./exception.base";

export class ExceptionBadRequest extends ExceptionBase {
  status = HttpStatus.BAD_REQUEST;
}
