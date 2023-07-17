import { createStore } from 'vuex'
import { toyStore } from './toy.store'
// import {userStore} from './user'

const store = createStore({
    strict: true,
    modules: {
        toyStore,
    }
})

export default store