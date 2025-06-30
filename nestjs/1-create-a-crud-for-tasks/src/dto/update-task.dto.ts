import { IsOptional, IsString } from 'class-validator';
import { TaskStatus } from 'src/enums';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  status?: TaskStatus;
}
