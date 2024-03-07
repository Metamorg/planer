import {
	Controller, Get
} from '@nestjs/common'
import { TaskService } from './task.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { CurrentUser } from '../auth/decorators/user.decorator'


@Controller('user/tasks')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Get()
	@Auth()
	async getAll(@CurrentUser('id') userId:string){
		return this.taskService.getAll(userId)
	}

}