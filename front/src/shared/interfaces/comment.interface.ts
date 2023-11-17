import { IPost } from './post.interface'
import { IUser } from './user.interface'

export interface IComment {
	id: number
	user: IUser
	post: IPost
	content: string
}
