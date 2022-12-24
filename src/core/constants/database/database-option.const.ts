import { ConnectOptions } from "mongoose";

export const DB_OPTION: ConnectOptions = Object.freeze({
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  writeConcern: "majority",
});
