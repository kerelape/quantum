import { CollapseError } from "./CollapseError";
import { Quantum } from "./Quantum";

export class Safe<T> implements Quantum<T> {
  constructor(
    private readonly origin: Quantum<T>,
    private readonly fallback: Quantum<T>,
  ) {}

  /**
   * 
   * @throws if the fallback also failed to measure
   * @returns fallback value if couldn't measure the origin
   */
  async value(): Promise<T> {
    try {
      return this.origin.value();
    } catch (e) {
      if (e instanceof CollapseError) {
        return this.fallback.value();
      } else {
        throw e;
      }
    }
  }
}