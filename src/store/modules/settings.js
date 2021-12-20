import variables from '/@/scss/element-variables.scss'
import defaultSettings from '/@/settings'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = () => ({
  theme: variables.theme,
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo
})

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

const getters = {
  theme: (state, getters) =>{
      return state.theme;
  },
  showSettings: (state, getters) =>{
    return state.showSettings;
  },
  tagsView: (state, getters) =>{
    return state.tagsView;
  },
  fixedHeader: (state, getters) =>{
    return state.fixedHeader;
  },
  sidebarLogo: (state, getters) =>{
    return state.sidebarLogo;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

