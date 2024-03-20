import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { PrismaService } from '../prisma.service';
import { TaskService } from './task.service'

@Module({
	controllers: [TaskController],
	providers: [TaskService, PrismaService],
	exports: [TaskService]
})
export class TaskModule {}
