import { Expose } from 'class-transformer';
import { TaskStatus } from 'src/enums';

export class GetTaskDto {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  description?: string;

  @Expose()
  status: TaskStatus;

  @Expose()
  createdAt: Date;
}
