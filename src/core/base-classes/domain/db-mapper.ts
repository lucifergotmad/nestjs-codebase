import { BaseEntityProps } from "./entity";

export type MongoEntityProps<MongoEntity> = Omit<
  MongoEntity,
  "_id" | "created_at" | "updated_at"
>;

export abstract class DbMapper<Entity extends BaseEntityProps, MongoEntity> {
  constructor(
    private entityConstructor: new (...args: any[]) => Entity,
    private mongoEntityConstructor: new (...args: any[]) => MongoEntity,
  ) {}

  protected abstract toMongoProps(
    entity: Entity,
  ): MongoEntityProps<MongoEntity>;

  toMongoEntity(entity: Entity): MongoEntity {
    const props = this.toMongoProps(entity);
    const mongoEntity = new this.mongoEntityConstructor({
      ...props,
    });

    return mongoEntity;
  }
}
