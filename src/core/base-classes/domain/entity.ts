import { Guard } from "src/core/logic/guard";
import { DateVO } from "src/core/value-objects/date.value-object";
import { UniqueEntityID } from "./unique-entity-id";

export interface BaseEntityProps {
  created_at: DateVO;
  updated_at: DateVO;
}

export interface RawBaseEntityProps {
  created_at: Date;
  updated_at: Date;
}

export abstract class Entity<EntityProps> {
  protected readonly _id: UniqueEntityID;
  protected _created_at: DateVO;
  protected _updated_at: DateVO;
  protected props: EntityProps;

  constructor(props: EntityProps, id?: UniqueEntityID) {
    this.validateProps(props);
    const now = DateVO.now();

    this._created_at = now;
    this._updated_at = now;
    this._id = id ? id : new UniqueEntityID();
    this.props = props;
  }

  get created_at(): DateVO {
    return this._created_at;
  }

  get updated_at(): DateVO {
    return this._updated_at;
  }

  public static isEntity(entity: unknown): entity is Entity<unknown> {
    return entity instanceof Entity;
  }

  public equals(object?: Entity<EntityProps>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (!Entity.isEntity(object)) {
      return false;
    }

    if (JSON.stringify(this) === JSON.stringify(object)) {
      return true;
    }

    return false;
  }

  public getPropsCopy(): EntityProps & RawBaseEntityProps {
    const propsCopy = {
      created_at: this._created_at.value,
      updated_at: this._updated_at.value,
      ...this.props,
    };
    return Object.freeze(propsCopy);
  }

  private validateProps(props: EntityProps) {
    if (Guard.isEmpty(props)) {
      throw new Error("Entity props should not be empty!");
    }
    if (typeof props !== "object") {
      throw new Error("Entity props should be an object");
    }
  }
}
