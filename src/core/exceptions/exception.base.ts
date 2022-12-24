export abstract class ExceptionBase extends Error {
  protected abstract status: number;
  private response: string;
  trace: any;

  /**
   * Base Class For Tracing error and centralize message and error status.
   *
   * @param message - message string
   * @param trace - trace file. obviously pass this | string
   */
  constructor(message: string, trace?: any) {
    super(message);
    this.response = message;
    this.trace = typeof trace === "string" ? trace : trace?.constructor?.name;
  }
}
