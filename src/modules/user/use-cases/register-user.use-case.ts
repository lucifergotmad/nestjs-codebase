import { Injectable } from "@nestjs/common";
import { BaseUseCase } from "src/core/base-classes/infra/use-case.base";
import { Utils } from "src/core/utils/utils.service";
import { AuthRegisterRequestDTO } from "src/modules/app/controller/dtos/auth-register.dto";
import { IdResponseDTO } from "src/interface-adapter/dtos/id.response.dto";
import { UserRepositoryPort } from "../database/user.repository.port";
import { InjectUserRepository } from "../database/user.repository.provider";
import { UserEntity } from "../domain/user.entity";
import { IUseCase } from "src/core/base-classes/interfaces/use-case.interface";
import { ResponseException } from "src/core/exceptions/response.http-exception";
import { UserLevel } from "src/core/constants/app/user/user-level.const";
import { IRepositoryResponse } from "src/core/ports/interfaces/repository-response.interface";

@Injectable()
export class RegisterUser
  extends BaseUseCase
  implements IUseCase<AuthRegisterRequestDTO, IdResponseDTO>
{
  constructor(
    @InjectUserRepository private userRepository: UserRepositoryPort,
    private readonly utils: Utils,
  ) {
    super();
  }

  public async execute(user: AuthRegisterRequestDTO): Promise<IdResponseDTO> {
    const session = await this.utils.transaction.startTransaction();
    let result: IRepositoryResponse;

    try {
      await session.withTransaction(async () => {
        await this.userRepository.findOneAndThrow({ user_id: user.username });

        const userEntity = await UserEntity.create({
          password: user.password,
          username: user.username,
          level: UserLevel.Owner,
        });

        result = await this.userRepository.save(userEntity);
      });

      return new IdResponseDTO(result._id);
    } catch (err) {
      throw new ResponseException(err.message, err.status, err.trace);
    } finally {
      await session.endSession();
    }
  }
}
