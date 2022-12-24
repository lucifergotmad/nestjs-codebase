import { AggregateRoot } from "src/core/base-classes/domain/aggregate-root";
import { Level } from "./value-objects/level.value-object";
import { Password } from "./value-objects/password.value-object";

export interface IUserProps {
  username: string;
  password: Password;
  level: Level;
}

export interface UserFactoryProps
  extends Omit<IUserProps, "password" | "level"> {
  password: string;
  level: string;
}

export class UserEntity extends AggregateRoot<IUserProps> {
  constructor(props: IUserProps) {
    super(props);
  }

  static async create(props: UserFactoryProps) {
    const password = await Password.create(props.password);

    return new UserEntity({
      username: props.username,
      password: password,
      level: new Level(props.level),
    });
  }
}
