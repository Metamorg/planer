import { Module } from '@nestjs/common';
import { TaskController } from './Task.controller';
import { PrismaService } from '../prisma.service';
import { TaskService } from './task.service'

@Module({
	controllers: [TaskController],
	providers: [TaskService, PrismaService],
	exports: [TaskService]
})
export class TaskModule {}
