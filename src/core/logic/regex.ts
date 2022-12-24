export class RegexMatcher {
  static isISOString(value: string) {
    return /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(value);
  }
}
