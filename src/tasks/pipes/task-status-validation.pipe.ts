import { BadRequestException, PipeTransform } from '@nestjs/common'
import { ALLOWED_TASK_STATUSES } from '../task.utility'

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: any): any {
    if (!this.isStatusValid(value.toUpperCase())) {
      throw new BadRequestException(`'${value}' is an invalid status.`)
    }

    return value.toUpperCase()
  }

  private isStatusValid(status: any): boolean {
    return ALLOWED_TASK_STATUSES.includes(status)
  }
}