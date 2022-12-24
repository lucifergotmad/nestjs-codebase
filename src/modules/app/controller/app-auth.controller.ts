import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { RegisterUser } from "src/modules/user/use-cases/register-user.use-case";
import { AuthService } from "src/infra/auth/auth.service";
import { LocalAuthGuard } from "src/infra/auth/local-auth.guard";
import { AuthLoginRequestDTO } from "./dtos/auth-login.dto";
import { AuthRegisterRequestDTO } from "./dtos/auth-register.dto";
import { IdResponseDTO } from "src/interface-adapter/dtos/id.response.dto";
import { AuthLoginResponseDto } from "./dtos/auth-login.response.dto";
import { HttpStatus } from "src/core/constants/error/status-code.const";
import { AuthRefreshTokenRequestDTO } from "./dtos/auth-refresh-token.dto";

@Controller("v1")
@ApiTags("App Authentication")
export class AppController {
  constructor(
    private authService: AuthService,
    private createUser: RegisterUser,
  ) {}

  @Post("auth/register")
  @ApiCreatedResponse({ type: IdResponseDTO })
  @ApiConflictResponse({ description: "Data already exists" })
  async register(@Body() body: AuthRegisterRequestDTO) {
    return await this.createUser.execute(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: AuthLoginResponseDto })
  @ApiUnauthorizedResponse({ description: "Unauthorize User" })
  async login(@Body() body: AuthLoginRequestDTO) {
    return await this.authService.login(body);
  }

  @Post("auth/logout")
  async logout(@Body() body: AuthRefreshTokenRequestDTO) {
    return await this.authService.logout(body);
  }

  @Post("auth/token")
  async refreshToken(@Body() body: AuthRefreshTokenRequestDTO) {
    return await this.authService.refreshToken(body);
  }
}
