import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { IHashUtil } from "./hash.interface";

@Injectable()
export class HashUtil implements IHashUtil {
  async generate(password: string) {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  }

  async compare(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
