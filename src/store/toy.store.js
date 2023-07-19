import { toyService } from "../services/toy.service";

export const toyStore = {
    strict: true,
    state() {
        return {
            toys: null,
            currToy: null,
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        setCurrToy(state, { toy }) {
            state.currToy = toy
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toy._id === toyId)
            state.toys.splice(idx, 1)
        },
        addToy(state, { toy }) {
            state.toys.unshift(toy)

        },
        updateToy(state, { toy }) {
            const idx = state.toys.findIndex(t => t._id === toy._id)
            state.toys.splice(idx, 1, toy)
        },
        setFilterBy(state, { filterBy }) {
            state.filterBy = filterBy
        }
    },
    getters: {
        toysToDisplay({ filterBy, toys }) {
            if (!toys) return null
            // const { txt, inStock, labels } = filterBy
            // let filteredToys = toys
            // if (txt.length) {
            //     console.log(txt)
            //     const regex = new RegExp(txt, 'i')
            //     filteredToys = filteredToys.filter((toy) => regex.test(toy.name))
            // }
            // if (inStock) {
            //     console.log(inStock)
            //     filteredToys = filteredToys.filter(toy => toy.inStock === inStock)
            // }
            // if (labels.length) {
            //     console.log(labels)
            //     filteredToys = filteredToys.filter(toy => labels.every(label => toy.labels.includes(label)))
            // }
            return toys
        },
        getEmptyToy() {
            return toyService.getEmptyToy()
        }
    },
    actions: {
        loadToys(context, { filterBy }) {
            toyService.query(filterBy)
                .then((toys) => {

                    context.commit({ type: 'setToys', toys })
                })
                .catch(() => console.log)
        },
        getById({ commit }, { toyId }) {
            return toyService.getById(toyId)
                .then(toy => {
                    commit({ type: 'setCurrToy', toy })
                    return toy
                })
                .catch(console.log('cannot get toy by id'))
        },
        removeToy({ commit, state, dispatch }, payload) {
            return toyService.remove(payload.toyId)
                .then(() => {
                    const toyToRemove = state.toys.find((toy) => {
                        toy._id === payload.toyId
                    })
                    commit(payload)
                })
                .catch(console.log('cannot remove toy'))
        },
        saveToy({ commit }, { toy }) {
            const actionType = toy._id ? 'updateToy' : 'saveToy'
            return toyService.save(toy)
                .then((savedToy) => {
                    commit({ type: actionType, toy: savedToy })
                })
                .catch(console.log('cannot save toy'))
        }
    }
}