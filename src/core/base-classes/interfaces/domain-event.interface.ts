import { UniqueEntityID } from "../domain/unique-entity-id";

export interface IDomainEvent {
  dateTimeOccurred: Date;
  getAggregateId(): UniqueEntityID;
}
