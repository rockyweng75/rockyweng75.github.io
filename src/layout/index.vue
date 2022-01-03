<template>
  <div class="wrapper">
     <div id="container">
        <button type="button" v-on:click="show=!show">Test</button>
        <div class="open-book">
        <transition 
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
          >
            <div class="page" ref="refDom" >
              <el-row class="header"></el-row>
              <el-row class="content">
                <div class="app-main">
                  <router-view v-slot="{ Component, route }">
                    <!-- <keep-alive> -->
                      <component :is="Component" :key="route.path"  />
                    <!-- </keep-alive> -->
                  </router-view>
                </div>
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
import ResizeMixin from './mixin/resizeHandler'
import { reactive, ref } from 'vue'

export default {
  components:{
  },
  mixins: [ResizeMixin],
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
  .v-enter-from > .header:after, 
  .v-enter-from > .content:after, 
  .v-enter-from > .footer:after, 
  .v-enter-to > .header:after, 
  .v-enter-to > .content:after, 
  .v-enter-to > .footer:after {
    transform-style: preserve-3d;
    animation: turn 2s;
    animation-fill-mode:forwards;
    transform-origin: left;
  } 

    @keyframes turn  {
        from{
            
        }
        50% {
          transform: rotateY(90deg);
          content: '';
          z-index: 1;
        } 
        to {
          transform: rotateY(170deg);
          content: '';
          z-index: 1;
        }
    }
</style>