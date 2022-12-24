import { ApiProperty } from "@nestjs/swagger";
import { IMessage } from "../interfaces/message.interface";

export class MessageResponseDTO implements IMessage {
  constructor(message: string) {
    this.message = message;
  }

  @ApiProperty({ example: "API Response message will be shown here!" })
  message: string;
}
