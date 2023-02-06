import { Injectable } from "@nestjs/common";
import { IDateUtil } from "./date.interface";
import * as moment from "moment-timezone";

@Injectable()
export class DateUtil implements IDateUtil {
  formatDate(dateFormat: string, date?: Date | string): string {
    const tanggal = date ? new Date(date) : new Date();
    return moment.tz(tanggal, "Asia/Jakarta").format(dateFormat);
  }

  getToday(): string {
    return moment().format("YYYY-MM-DD");
  }
}
