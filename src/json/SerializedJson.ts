import { Quantum } from "../core/Quantum";
import { Text } from "../core/Text";
import { JsonValue } from "./JsonValue";

export class SerializedJson implements Text {
  constructor(private readonly json: Quantum<JsonValue>) {}
  
  async value(): Promise<string> {
    return JSON.stringify(await this.json.value());
  }
}
