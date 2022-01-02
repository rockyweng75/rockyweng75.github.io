<template>
  <div class="wrapper">
     <div id="container">
       {{show}}
        <button type="button" v-on:click="show=!show">Test</button>
        <div class="open-book">
        <transition 
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
          >
            <div class="page" ref="refDom" v-if="show">
              <el-row class="header"></el-row>
              <el-row class="content">
                  <app-main />
              </el-row>
              <el-row class="footer"></el-row>
            </div>
        </transition>
        </div>
     </div>
      <el-backtop />
  </div>
  <footer>
      <div>Icons made by <a href="https://www.flaticon.com/authors/justicon" title="justicon">justicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </footer>

</template>

<script>
import { AppMain } from './components'
// import ResizeMixin from './mixin/resizeHandler'
import { reactive, ref } from 'vue'

export default {
  components:{
    AppMain
  },
  // mixins: [ResizeMixin],
  setup() {

    const show = ref(false)
    const refDom = ref({})
    return {
      show,
      refDom,
      beforeEnter: (el) =>{
        console.log('beforeEnter', el.className)
        // el.style.opacity = 0
      },
      enter: (el, done) =>{
        console.log('enter', el.className)
        done();
      },
      leave: (el, done) =>{
        console.log('leave', el.className)
        done();
      }
    }
  },
}
</script>

<style scoped>

  .v-enter-active {
    transition: all .3s ease;
  }
  .v-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .v-enter-from, .v-enter-to {
    animation: var(--animation)
  } 

    @keyframes turn  {
        from{
            
        }
        50% {
            transform: rotateY(90deg);
            visibility:hidden;
        } 
        to {
            transform: rotateY(160deg);
            visibility:hidden;
        }
    }
</style>