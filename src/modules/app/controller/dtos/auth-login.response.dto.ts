import { ApiProperty } from "@nestjs/swagger";
import { UserLevel } from "src/core/constants/app/user/user-level.const";
import { IAuthLoginResponse } from "src/interface-adapter/interfaces/auth-login/auth-login.response.interface";

export class AuthLoginResponseDto implements IAuthLoginResponse {
  constructor(props: IAuthLoginResponse) {
    this.accessToken = props.accessToken;
    this.refreshToken = props.refreshToken;
    this.username = props.username;
    this.level = props.level;
  }
  @ApiProperty({ example: "23498sdf98234-23498ydsf-23823h-sd8f324" })
  accessToken: string;

  @ApiProperty({ example: "23498sdf98234-23498ydsf-23823h-sd8f324" })
  refreshToken: string;

  @ApiProperty({ example: "lucifer" })
  username: string;

  @ApiProperty({ enum: UserLevel, example: UserLevel.Owner })
  level: string;
}
