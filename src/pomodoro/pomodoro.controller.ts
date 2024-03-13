import {
	Body,
	Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe
} from '@nestjs/common'
import { PomodoroService } from './pomodoro.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { CurrentUser } from '../auth/decorators/user.decorator'
import { PomodoroDto } from './pomodoro.dto'


@Controller('user/timer')
export class PomodoroController {
	constructor(private readonly taskService: PomodoroService) {
	}

	@Get()
	@Auth()
	async getAll(@CurrentUser('id') userId: string) {
		return this.taskService.getAll(userId)
	}


	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async create(@Body() dto: PomodoroDto, @CurrentUser('id') userId: string) {
		return this.taskService.create(dto, userId)
	}


	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(@Body() dto: PomodoroDto,
							 @CurrentUser('id') userId: string,
							 @Param('id') id: string
	) {
		return this.taskService.update(dto, id, userId)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.taskService.delete(id)
	}
}