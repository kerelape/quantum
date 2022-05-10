
export type Quantum<T> = {
  value(): Promise<T>;
}