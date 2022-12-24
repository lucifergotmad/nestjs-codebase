import { IsRequiredString } from "src/core/decorators/dto-decorators/required-string.decorator";

export class AuthRegisterRequestDTO {
  @IsRequiredString({ example: "lucifergotmad" })
  username: string;

  @IsRequiredString({ example: "binary1010" })
  password: string;
}
