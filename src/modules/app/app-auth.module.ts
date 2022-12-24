import { Module } from "@nestjs/common";
import { AuthModule } from "src/infra/auth/auth.module";
import { UserUseCaseModule } from "../user/use-cases/user.use-case.module";
import { AppController } from "./controller/app-auth.controller";

@Module({
  imports: [AuthModule, UserUseCaseModule],
  controllers: [AppController],
})
export class AppAuthModule {}
