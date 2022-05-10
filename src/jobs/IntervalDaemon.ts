import { Quantum } from "../core/Quantum";
import { Task } from "./Task";

export class IntervalDaemon implements Quantum<ReturnType<typeof setInterval>> {
  constructor(private readonly job: Task, private readonly timeout: Quantum<number>) {}

  async value(): Promise<ReturnType<typeof setInterval>> {
    return setInterval(
      () => this.job.value(), 
      await this.timeout.value()
    );
  }
}