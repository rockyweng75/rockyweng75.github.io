import { fetchAttacks } from '/@/api/attack.js'

const key = "book-rgp-attack"
const state = () => ({
    attack: {}, 
    attackNumber: 0,
    attacks: [],
    items:[]
  })
  
  const mutations = {
    setAttack: (state, index) => {
        state.attack = state.attacks.filter(o => o.id == index)[0]
        state.attackNumber = index
        sessionStorage.setItem('attack', JSON.stringify(state.attack))
        sessionStorage.setItem('attackNumber', JSON.stringify(state.attackNumber))
    },
    setAttacks: (state, attacks) => {
        console.log('setAttacks', attacks)
        localStorage.setItem(key, JSON.stringify(attacks))
        state.attacks = attacks
    },
    setItems: (state, items) => {
        localStorage.setItem('items', JSON.stringify(items))
        state.items = items
    }
  }
  
  const actions = {
    getAttack({commit, state, dispatch}, index){
        return new Promise((resolve, reject) => {
            if(state.attacks.length === 0){
                dispatch('getAttacks').then(()=>{
                    commit('setAttack', index)
                })
            } else {
                commit('setAttack', index)
            }
        })
    },
    getAttacks({commit}){
        return new Promise((resolve, reject) => {
            fetchAttacks()
            .then(response => {
                commit('setAttacks', response)
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
        })
    },
  }
  
  const getters ={
    currentAttack:(state) => {
        return state.attack
    },
    currentAttackNumber:(state) => {
        return state.attackNumber
    },
    items:(state) => {
        return state.items
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
  