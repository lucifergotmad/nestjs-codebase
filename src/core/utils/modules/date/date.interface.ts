export interface IDateUtil {
  formatDate(dateFormat: string, date?: Date | string): string;
  getToday(): string;
}
