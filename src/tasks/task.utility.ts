import { TaskStatus } from './task.model'

export const ALLOWED_TASK_STATUSES = [
  TaskStatus.OPEN,
  TaskStatus.IN_PROGRESS,
  TaskStatus.DONE
]