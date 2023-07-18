import { httpService } from './http.service.js'

export const toyService = {
	query,
	getById,
	remove,
	save,
	getEmptyToy,
}

async function query(filterBy) {
	return await httpService.get('toy')
}

async function getById(toyId) {
	return httpService.get(`toy/${toyId}`)
}

async function remove(toyId) {
	httpService.delete(`toy/${toyId}`)
}

async function save(toy) {
	if (toy._id) {
		return httpService.put(`toy/${toy._id}`, toy)
	}
	return httpService.post('toy', toy)
}

function getEmptyToy() {
	return {
		name: '',
		price: 0,
		labels: [],
		createdAt: Date.now(),
		inStock: false,
	}
}