import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";
import { Encryptor } from "src/infra/services/encryptor.service";

@Injectable()
export class DecryptorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const isEnc = Number(req.headers.enc ?? "0");
    const ignoreFields = JSON.parse(String(req.headers.ignore || "[]"));
    const encryptor = new Encryptor();
    if (isEnc) {
      req.body = encryptor.doDecrypt(req.body, ignoreFields);
      next();
    } else {
      next();
    }
  }
}
