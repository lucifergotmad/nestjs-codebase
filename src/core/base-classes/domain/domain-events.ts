import { AggregateRoot } from "./aggregate-root";
import { UniqueEntityID } from "./unique-entity-id";

export class DomainEvents {
  private static _handlersMap = {};
  private static _markedAggregates: AggregateRoot<any>[] = [];

  public static markAggregateForDispatch(aggregate: AggregateRoot<any>): void {
    const aggregateFound = !!this.findMarkedAggregateByID(aggregate.id);

    if (!aggregateFound) {
      this._markedAggregates.push(aggregate);
    }
  }

  private static findMarkedAggregateByID(
    id: UniqueEntityID,
  ): AggregateRoot<any> {
    let found: AggregateRoot<any> = null;
    for (const aggregate of this._markedAggregates) {
      if (aggregate.id.equals(id)) {
        found = aggregate;
      }
    }
    return found;
  }
}
