import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PomodoroSessionDto } from './pomodoro.dto'


@Injectable()
export class PomodoroService {
	constructor(private prisma: PrismaService) {}


	async getTodaySession(userId:string){
		const today = new Date().toISOString().split('T')[0]
		return this.prisma.pomodoroSession.findFirst({
			where:{
				createdAt:{
					gte: new Date(today),
				},
				userId
			},
			include:{
				rounds:{
					orderBy:{
						id:'desc',
					}
				}
			}
		})

	}

	async create(userId: string){
const todaySession = await  this.getTodaySession(userId)

		if(todaySession) return todaySession

		const user = await this.prisma.user.findUnique({
			where:{
				id: userId
			},
			select:{
				intervalCount: true
			}
		})
	}

	async update(dto: Partial<PomodoroDto>,taskId:string, userId: string){
		return this.prisma.pomodoro.update({
				where:{
					userId,
					id: taskId,
				},
			data:dto
			})
	}

	async delete(taskId: string){
		return this.prisma.pomodoro.delete({
			where:{
				id: taskId
			}
		})
	}
}