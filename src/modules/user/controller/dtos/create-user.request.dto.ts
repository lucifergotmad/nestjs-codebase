import { IsOptionalNumber } from "src/core/decorators/dto-decorators/optional-number.decorator";
import { IsRequiredNumber } from "src/core/decorators/dto-decorators/required-number.decorator";
import { IsRequiredString } from "src/core/decorators/dto-decorators/required-string.decorator";

export class CreateUserRequestDTO {
  @IsRequiredString({ example: "lucifergotmad" })
  email: string;

  @IsRequiredString({ example: "lucifergotmad" })
  username: string;

  @IsRequiredString({ example: "binary1010" })
  password: string;

  @IsRequiredNumber({ example: 77.8 })
  weight: number;

  @IsRequiredNumber({ example: 175 })
  height: number;

  @IsRequiredNumber({ example: 22 })
  age: number;

  @IsOptionalNumber({ example: 67 })
  target?: number;
}
