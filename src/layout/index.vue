<template>
  <div class="wrapper">
     <div id="container">
        <app-main />
     </div>
      <el-backtop />
  </div>
  <footer>
      <div>Icons made by <a href="https://www.flaticon.com/authors/justicon" title="justicon">justicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </footer>

</template>

<script>
import { AppMain } from './components'
import ResizeMixin from './mixin/resizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      // sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        // hideSidebar: !this.sidebar.opened,
        // openSidebar: this.sidebar.opened,
        // withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    // handleClickOutside() {
    //   this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    // }
  }
}
</script>

<style>
  @import "/@/css/book.css";

</style>