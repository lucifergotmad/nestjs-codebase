import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PATH_METADATA } from "@nestjs/common/constants";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AppController } from "src/modules/app/controller/app-auth.controller";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: "username" });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException("username atau password salah");
    }
    return user;
  }
}
