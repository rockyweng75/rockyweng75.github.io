import { createStore, createLogger } from 'vuex'

// import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import errorLog from './modules/errorLog'
import page from './modules/page'
import attack from './modules/attack'


const debug = process.env.NODE_ENV !== 'production'
const store = createStore({
    modules:{
        app,
        settings,
        errorLog,
        page,
        attack
    },
    // getters,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

export default store;