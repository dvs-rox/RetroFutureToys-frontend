import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const TOY_KEY = 'toyDB'

_createToys()

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
}

function query() {
    return storageService.query(TOY_KEY)
}

function getById(toyId) {
    return storageService.get(TOY_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(TOY_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(TOY_KEY, toy)
    } else {
        return storageService.post(TOY_KEY, toy)
    }
}

function getEmptyToy() {
    return {
        name: '',
        price: 0,
        labels: [],
        createdAt: Date.now(),
        inStock: false,
        direction: 1
    }
}


function _createToys() {
    let toys = utilService.loadFromStorage(TOY_KEY)
    if (!toys || !toys.length) {
        toys = [_createToy('Superman', utilService.getRandomIntInclusive(20, 100)), _createToy('Batman', utilService.getRandomIntInclusive(20, 150)), _createToy('Ironman', utilService.getRandomIntInclusive(20, 100))]
        utilService.saveToStorage(TOY_KEY, toys)
    }
    return toys
}

function _createToy(name, price) {
    return {
        _id: utilService.makeId(),
        name,
        price,
        labels: [
            'action',
            'fantasy',
            'science fiction'
        ],
        createdAt: Date.now(),
        inStock: true,
    }
}