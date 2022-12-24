import { HttpException } from "@nestjs/common";

export class ResponseException extends HttpException {
  trace: string;

  /**
   *
   * @param message - message string
   * @param status - http status code
   * @param trace - tracing file, obviously pass this or string
   */
  constructor(message: any, status: number, trace?: any) {
    super(message, status);
    this.trace = typeof trace === "string" ? trace : trace?.constructor?.name;
  }
}
