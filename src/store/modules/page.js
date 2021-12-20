import { fetchPages } from '/@/api/page.js'
const state = () => ({
    page: {
        // title: '冒險之書',
        // number: 1,
        // rightTitle: '',
        // leftTitle: '',
        // content:'',
    }, 
    pageNumber: 0,
    pages:[],
  })
  
  const mutations = {
    setPage: (state, index) => {
        state.page = state.pages[index]
        state.pageNumber = (index * 2) + 1
    },
    setPages: (state, pages) => {
        state.pages = pages
    }
  }
  
  const actions = {
    next({commit}){
        return new Promise((resolve, reject) => {
            fetchPage()
            .then(response => {
                commit('setPages', response)
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
        })
    },
    getPages({commit}){
        return new Promise((resolve, reject) => {
            fetchPages()
            .then(response => {
                commit('setPages', response)
                commit('setPage', 0)
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
        })
    }
  }
  
  const getters ={
    currentPage:(state) => {
      return state.page
    },
    currentPageNumber:(state) => {
        return state.pageNumber
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
  