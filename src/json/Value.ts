import { Quantum } from "../core/Quantum";
import { JsonObject } from "./JsonObject";
import { JsonValue } from "./JsonValue";
import { Text } from "../core/Text";

export class Value<T extends JsonValue> implements Quantum<T> {
  constructor(
    private readonly json: Quantum<JsonObject>,
    private readonly key: Text
  ) {}

  async value(): Promise<T> {
    return (await this.json.value())[await this.key.value()] as T;
  }
}
