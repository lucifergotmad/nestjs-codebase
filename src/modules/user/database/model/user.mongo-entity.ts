import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { BaseMongoEntity } from "src/core/base-classes/infra/mongo-entity.base";

@Schema({ collection: "tm_users" })
export class UserMongoEntity extends BaseMongoEntity<typeof UserMongoEntity> {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  age: number;

  @Prop({ required: false })
  targe?: number;
}

export const UserSchema = SchemaFactory.createForClass(UserMongoEntity);
export const UserModel = [{ name: UserMongoEntity.name, schema: UserSchema }];

export type UserDocument = UserMongoEntity & Document;
