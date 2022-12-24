import { Injectable } from "@nestjs/common";
import { BaseUseCase } from "src/core/base-classes/infra/use-case.base";
import { Utils } from "src/core/utils/utils.service";
import { IdResponseDTO } from "src/interface-adapter/dtos/id.response.dto";
import { UserRepositoryPort } from "../database/user.repository.port";
import { InjectUserRepository } from "../database/user.repository.provider";
import { UserEntity } from "../domain/user.entity";
import { IUseCase } from "src/core/base-classes/interfaces/use-case.interface";
import { ResponseException } from "src/core/exceptions/response.http-exception";
import { CreateUserRequestDTO } from "../controller/dtos/create-user.request.dto";
import { IRepositoryResponse } from "src/core/ports/interfaces/repository-response.interface";

@Injectable()
export class CreateUser
  extends BaseUseCase
  implements IUseCase<CreateUserRequestDTO, IdResponseDTO> {
  constructor(
    @InjectUserRepository private userRepository: UserRepositoryPort,
    private readonly utils: Utils,
  ) {
    super();
  }

  public async execute(user: CreateUserRequestDTO): Promise<IdResponseDTO> {
    const session = await this.utils.transaction.startTransaction();
    let result: IRepositoryResponse;

    try {
      await session.withTransaction(async () => {
        await this.userRepository.findOneAndThrow({ user_id: user.username });

        const userEntity = await UserEntity.create({
          password: user.password,
          username: user.username,
          level: user.level,
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
