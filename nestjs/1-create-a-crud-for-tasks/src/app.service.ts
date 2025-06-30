import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { randomUUID } from 'crypto';

const tasks: Task[] = [];

@Injectable()
export class AppService {
  createTask(createTaskDto: CreateTaskDto) {
    const task = {
      id: randomUUID(),
      ...createTaskDto,
      createdAt: new Date(),
    };
    tasks.push(task);

    return task;
  }

  getTasks() {
    return tasks.sort((a, b) => {
      return b.createdAt.getTime() - a.createdAt.getTime();
    });
  }

  getTask(id: string) {
    return tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updateTaskDto: UpdateTaskDto) {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return null;
    }

    const updatedTask = tasks[taskIndex];

    updatedTask.title = updateTaskDto.title ?? updatedTask.title;
    updatedTask.description =
      updateTaskDto.description ?? updatedTask.description;
    updatedTask.status = updateTaskDto.status ?? updatedTask.status;

    tasks[taskIndex] = updatedTask;

    return updatedTask;
  }

  deleteTask(id: string) {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return null;
    }

    const deletedTask = tasks.splice(taskIndex, 1);
    return deletedTask[0];
  }
}
