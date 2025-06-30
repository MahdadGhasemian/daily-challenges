import { TaskStatus } from 'src/enums';

export interface TaskInterface {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: Date;
}
