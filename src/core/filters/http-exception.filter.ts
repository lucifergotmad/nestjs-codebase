import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from "@nestjs/common";
import { CustomLogger } from "src/infra/logger/logger";
import { HttpStatus } from "../constants/error/status-code.const";
import { ResponseException } from "../exceptions/response.http-exception";

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus() || 500
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message: any =
      exception instanceof HttpException
        ? exception.getResponse()
        : "Internal server error";

    const logMessage: string =
      typeof message !== "string" ? message.message : message;

    const trace = exception instanceof ResponseException && exception.trace;
    const logger = new CustomLogger(request.url.replace(/^\/api/, ""));
    logger.error(logMessage, trace);

    const responseJson =
      typeof message !== "string"
        ? message
        : {
            statusCode: status,
            message,
          };

    response.status(status).json(responseJson);
  }
}
