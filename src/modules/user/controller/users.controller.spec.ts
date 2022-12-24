import { Test, TestingModule } from "@nestjs/testing";
import { RegisterUser } from "src/modules/user/use-cases/register-user.use-case";
import { DeleteUser } from "src/modules/user/use-cases/delete-user.use-case";
import { UpdateUser } from "src/modules/user/use-cases/update-user.use-case";
import { UsersController } from "./users.controller";

describe("UsersController", () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [RegisterUser, UpdateUser, DeleteUser],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
