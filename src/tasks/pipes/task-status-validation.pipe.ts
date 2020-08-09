import { BadRequestException, PipeTransform } from '@nestjs/common'
import { TaskStatus } from '../task.model'

export class TaskStatusValidationPipe implements PipeTransform {
  readonly ALLOWED_STATUSES = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE
  ]

  transform(value: any): any {
    if (!this.isStatusValid(value.toUpperCase())) {
      throw new BadRequestException(`'${value}' is an invalid status.`)
    }

    return value.toUpperCase()
  }

  private isStatusValid(status: any): boolean {
    return this.ALLOWED_STATUSES.includes(status)
  }
}