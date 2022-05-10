
/**
 * Thrown when a quantum faced an issue during measurement process.
 */
export class CollapseError extends Error {
  constructor() {
    super("couldn't measure the value of a quantum");
  }
}