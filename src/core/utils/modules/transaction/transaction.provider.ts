import { getConnectionToken } from "@nestjs/mongoose";
import { Connection } from "mongoose";
import { ConnectionName } from "src/core/constants/database/connection-name.const";
import { TransactionUtil } from "./transaction.service";

export const transactionProvider = [
  {
    provide: ConnectionName.DB_PRIMARY,
    useFactory: (primaryConnection: Connection) =>
      new TransactionUtil(primaryConnection),
    inject: [getConnectionToken()],
  },
];
