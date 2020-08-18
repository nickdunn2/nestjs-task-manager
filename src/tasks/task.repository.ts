import { EntityRepository, Repository } from 'typeorm/index'
import { Task } from './task.entity'

@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{
  
}