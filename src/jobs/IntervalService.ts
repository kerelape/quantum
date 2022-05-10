import { Service } from "./Service";
import { Task } from "./Task";
import { Quantum } from "../core/Quantum";

export class IntervalService implements Service {
  constructor(private readonly daemon: Quantum<ReturnType<typeof setInterval>>) {}

  async value(): Promise<Task> {
    return new IntervalActivity(await this.daemon.value());
  }
}

class IntervalActivity implements Task {
  constructor(private readonly id: ReturnType<typeof setInterval>) {}

  async value(): Promise<void> {
    clearInterval(this.id);
  }
}