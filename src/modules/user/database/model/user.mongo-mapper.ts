import {
  DbMapper,
  MongoEntityProps,
} from "src/core/base-classes/domain/db-mapper";
import { UserEntity } from "../../domain/user.entity";
import { UserMongoEntity } from "./user.mongo-entity";

export class UserMongoMapper extends DbMapper<UserEntity, UserMongoEntity> {
  protected toMongoProps(
    entity: UserEntity,
  ): MongoEntityProps<UserMongoEntity> {
    const props = entity.getPropsCopy();

    const mongoProps: MongoEntityProps<UserMongoEntity> = {
      username: props.username,
      password: props.password.value,
      level: props.level.value,
    };
    return mongoProps;
  }
}
