import { IComment } from './comment.interface'

export interface IPost {
	id: number
	title: string
	content: string
	imageUrl: string
	views: number
	raiting: number
	comments?: IComment[]
}
