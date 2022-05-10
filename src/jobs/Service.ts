import { Quantum } from "../core/Quantum";
import { Task } from "./Task";

/**
 * Quantum of task, that finishes activity of the service. A new activity 
 * is being created when the service is measured 
 */
export type Service = Quantum<Task>;
