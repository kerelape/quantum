import { Quantum } from "./Quantum";

export class Determined<T> implements Quantum<T> {
  constructor(private readonly origin: T) {}

  async value(): Promise<T> {
    return this.origin;
  }
}