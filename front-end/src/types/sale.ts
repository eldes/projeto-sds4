import Seller from './seller'

export type SaleSum = {
	sellerName: string
	sum: number
}

export type SaleSuccess = {
	sellerName: string
	visited: number
	deals: number
}

export type SalesPage = {
	content?: Sale[]
	empty?: boolean
	last: boolean
	first: boolean
	totalElements: number
	totalPages: number
	size?: number
	number: number
	numberOfElements?: number
}

type Sale = {
	id: number
	visited: number
	deals: number
	amount: number
	date: string
	seller: Seller
}

export default Sale