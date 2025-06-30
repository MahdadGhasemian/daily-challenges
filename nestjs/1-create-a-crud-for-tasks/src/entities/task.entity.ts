import { TaskStatus } from 'src/enums';
import { TaskInterface } from 'src/interfaces';

export class Task implements TaskInterface {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: Date;

  constructor(
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
    createdAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
  }
}
