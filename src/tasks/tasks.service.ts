import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAllTasks(): string {
    return 'Retorna todas las tareas';
  }

  createTask(task: any): string {
    return task;
  }
}