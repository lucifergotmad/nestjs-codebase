import { HttpStatus } from "../constants/error/status-code.const";
import { ExceptionBase } from "./exception.base";

export class ExceptionUnprocessableEntity extends ExceptionBase {
  status = HttpStatus.UNPROCESSABLE_ENTITY;
}
