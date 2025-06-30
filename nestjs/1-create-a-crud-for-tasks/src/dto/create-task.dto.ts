import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { TaskStatus } from 'src/enums';

export class CreateTaskDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(10)
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
