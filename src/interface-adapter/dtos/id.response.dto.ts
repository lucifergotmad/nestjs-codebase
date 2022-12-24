import { ApiProperty } from "@nestjs/swagger";
import { IId } from "../interfaces/id.interface";

export class IdResponseDTO implements IId {
  constructor(id: string) {
    this._id = id;
  }

  @ApiProperty({ example: "1234567890a12bc3d5e67aaa" })
  _id: string;
}
