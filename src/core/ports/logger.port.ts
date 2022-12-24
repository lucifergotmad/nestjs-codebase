export interface LoggerPort {
  log(message: any, ...meta: Array<any>): void;
  error(message: any, ...meta: Array<any>): void;
  warn(message: any, ...meta: Array<any>): void;
  debug?(message: any, ...meta: Array<any>): void;
  verbose?(message: any, ...meta: Array<any>): void;
}
