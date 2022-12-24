import { Module } from "@nestjs/common";
import { UserRepositoryModule } from "../database/user.repository.module";
import { userUseCaseProvider } from "./user.use-case.provider";

@Module({
  imports: [UserRepositoryModule],
  exports: userUseCaseProvider,
  providers: userUseCaseProvider,
})
export class UserUseCaseModule {}
