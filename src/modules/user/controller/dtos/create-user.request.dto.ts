import { UserLevel } from "src/core/constants/app/user/user-level.const";
import { IsRequiredString } from "src/core/decorators/dto-decorators/required-string.decorator";

export class CreateUserRequestDTO {
  @IsRequiredString({ example: "lucifergotmad" })
  username: string;

  @IsRequiredString({ example: "binary1010" })
  password: string;

  @IsRequiredString({
    example: UserLevel.Owner,
    description: `${UserLevel.Owner}|${UserLevel.Editor}|${UserLevel.Viewer}`,
  })
  level: string;
}
