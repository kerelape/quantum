
export type Quantum<T> = {
  /**
   * Measure the quantum value
   * 
   * @throws {CollapseError}
   */
  value(): Promise<T>;
}