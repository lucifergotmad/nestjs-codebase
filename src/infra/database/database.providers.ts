import { MongooseModule } from "@nestjs/mongoose";
import { EnvModule } from "../configs/env.module";
import { EnvService } from "../configs/env.service";
import { DB_OPTION } from "../../core/constants/database/database-option.const";
import { ConnectionName } from "src/core/constants/database/connection-name.const";

export const databaseProviders = [
  MongooseModule.forRootAsync({
    imports: [EnvModule],
    inject: [EnvService],
    useFactory: (envService: EnvService) => ({
      connectionName: ConnectionName.DB_PRIMARY,
      uri: envService.dbConnectionURI,
      dbName: envService.dbName,
      user: envService.dbUsername,
      pass: envService.dbPassword,
      ...DB_OPTION,
    }),
  }),
];
