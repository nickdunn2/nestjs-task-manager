import { IsIn, IsNotEmpty, IsOptional } from 'class-validator'
import { ALLOWED_TASK_STATUSES } from '../task.utility'
import { TaskStatus } from '../task-status.enum'

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn(ALLOWED_TASK_STATUSES)
  status: TaskStatus

  @IsOptional()
  @IsNotEmpty()
  search: string
}