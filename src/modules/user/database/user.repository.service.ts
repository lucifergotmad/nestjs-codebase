import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserRepositoryPort } from "./user.repository.port";
import { UserMongoEntity } from "./model/user.mongo-entity";
import { BaseRepository } from "src/core/base-classes/infra/repository.base";
import { UserEntity } from "../domain/user.entity";
import { UserMongoMapper } from "./model/user.mongo-mapper";
import { UserIgnore } from "src/core/constants/encryption/encryption-ignore";

@Injectable()
export class UserRepository
  extends BaseRepository<UserMongoEntity, UserEntity>
  implements UserRepositoryPort
{
  constructor(
    @InjectModel(UserMongoEntity.name)
    private userModel: Model<UserMongoEntity>,
  ) {
    super(
      userModel,
      new UserMongoMapper(UserEntity, UserMongoEntity),
      UserIgnore,
    );
  }
}
