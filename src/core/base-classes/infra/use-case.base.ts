import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import { CustomLogger } from "src/infra/logger/logger";
import { LoggerPort } from "../../ports/logger.port";

export interface APIProperty {
  request?: Request;
  response?: Response;
}

interface JwtDecoded {
  username?: string;
}

@Injectable()
export class BaseUseCase {
  protected logger: LoggerPort;
  protected request?: Request;
  protected response?: Response;
  protected user?: JwtDecoded;

  constructor() {
    this.logger = new CustomLogger(this.constructor.name);
  }

  setApiProperty(apiProperty?: APIProperty) {
    if (apiProperty) {
      this.request = apiProperty.request;
      this.response = apiProperty.response;
    }
    return this;
  }

  injectDecodedToken(props: JwtDecoded) {
    this.user = props;
    return this;
  }
}
