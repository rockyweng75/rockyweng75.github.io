import { fetchPages } from '/@/api/page.js'

const key = "book-rgp-pages"
const state = () => ({
    page: {
        // title: '冒險之書',
        // number: 1,
        // rightTitle: '',
        // leftTitle: '',
        // content:'',
    }, 
    pageNumber: 0,
    pages: [],
  })
  
  const mutations = {
    setPage: (state, index) => {
        state.page = state.pages[index]
        state.pageNumber = index + 1
        sessionStorage.setItem('page', JSON.stringify(state.page))
        sessionStorage.setItem('pageNumber', JSON.stringify(state.pageNumber))

    },
    setPages: (state, pages) => {
        localStorage.setItem(key, JSON.stringify(pages))
        state.pages = pages
    }
  }
  
  const actions = {
    getPage({commit, state, dispatch}, index){
        return new Promise((resolve, reject) => {
            if(state.pages.length === 0){
                dispatch('getPages')
                commit('setPage', index - 1)
            } else {
                commit('setPage', index - 1)
            }
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
  