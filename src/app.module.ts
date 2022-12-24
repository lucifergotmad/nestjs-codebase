import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { databaseProviders } from "./infra/database/database.providers";
import { UtilsModule } from "./core/utils/utils.module";
import { AuthModule } from "./infra/auth/auth.module";
import { ResourceModule } from "./modules/resource.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ...databaseProviders,
    ResourceModule,
    UtilsModule,
    AuthModule,
  ],
})
export class AppModule {}
