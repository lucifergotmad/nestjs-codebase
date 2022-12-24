import { Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";

export abstract class BaseMongoEntity<MongoModel> {
  @Prop({ type: Types.ObjectId, required: true, auto: true })
  _id: string;

  constructor(props?: MongoModel) {
    if (props) {
      Object.assign(this, props);
    }
  }
}
