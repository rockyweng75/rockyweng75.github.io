import Cookies from 'js-cookie'

const state = () => ({
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !! + Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  size: Cookies.get('size') || 'medium',
  windowsWidth: 960,
  lang: "zh-tw"
})

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  },
  SET_WINDOWS_WIDTH: (state, width) => {
    state.windowsWidth = width
  },
  SET_LANG: (state, lang) => {
    state.lang = lang
    localStorage.setItem("lang", JSON.stringify(lang))
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  },
  setWindowsWidth({ commit }, width) {
    commit('SET_WINDOWS_WIDTH', width)
  },
  changeLang({ dispatch, commit, rootGetters }, lang) {
    return new Promise((resolve) => {
      commit('SET_LANG', lang)
      resolve()
    })
  },
}

const getters = {
  sidebar:(state, getters) =>{
    return state.sidebar;
  },
  device:(state, getters) =>{
      return state.device;
  },
  size:(state, getters) =>{
      return state.size;
  },
  windowsWidth:(state, getters) =>{
      return state.windowsWidth;
  },
  lang:(state, getters) =>{
      return state.lang;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
