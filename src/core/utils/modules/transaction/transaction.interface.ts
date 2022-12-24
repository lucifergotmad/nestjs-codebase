import { ClientSession } from "mongoose";

export interface ITransactionUtil {
  startTransaction(): Promise<ClientSession>;
  commitTransaction(session: ClientSession): Promise<void>;
  rollbackTransaction(session: ClientSession): Promise<void>;
}
