import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Serialize } from './interceptors';
import { GetTaskDto } from './dto/get-task.dto';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @Serialize(GetTaskDto)
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.appService.createTask(createTaskDto);
  }

  @Get()
  getTasks() {
    return this.appService.getTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.appService.getTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.appService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.appService.deleteTask(id);
  }
}
