import { Quantum } from "../core/Quantum";
import { Text } from "../core/Text";
import { JsonValue } from "./JsonValue";

export class Json implements Quantum<JsonValue> {
  constructor(private readonly source: Text) {}

  async value(): Promise<JsonValue> {
    return JSON.parse(await this.source.value());
  }
}
