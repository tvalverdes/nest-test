import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  private task: Task[] = [
    {
      id: '1',
      title: 'First task',
      description: 'First task description',
      status: TaskStatus.PENDING
    },
    {
      id: '2',
      title: 'First task 2',
      description: 'First task description 2',
      status: TaskStatus.PENDING
    }
  ];
  getAllTasks() {
    return this.task;
  }
  createTask(title: string, description: string) {
    const task: Task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING
    };
    this.task.push(task);
    return task;
  }

  getTaskById(id: string): Task {
    return this.task.find((task) => task.id === id);
  }

  updateTask(id: string, updatedFields: any) {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedFields);
    this.task.map((task) => {
      task.id === id ? newTask : task;
    });
    return newTask;
  }

  deleteTask(id: string) {
    this.task = this.task.filter((task) => task.id !== id);
  }
}
