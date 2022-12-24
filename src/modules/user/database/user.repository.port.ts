import { BaseRepositoryPort } from "src/core/ports/repository.base.port";
import { UserEntity } from "../domain/user.entity";
import { UserMongoEntity } from "./model/user.mongo-entity";

export interface UserRepositoryPort
  extends BaseRepositoryPort<UserMongoEntity, UserEntity> {
  findActiveUser(): Promise<Array<UserMongoEntity>>;
}
