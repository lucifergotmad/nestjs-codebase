import { Module } from "@nestjs/common";
import { UsersController } from "./controller/users.controller";
import { UserRepositoryModule } from "./database/user.repository.module";
import { UserUseCaseModule } from "./use-cases/user.use-case.module";

@Module({
  imports: [UserUseCaseModule, UserRepositoryModule],
  controllers: [UsersController],
})
export class UserModule {}
