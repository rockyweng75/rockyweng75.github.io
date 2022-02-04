<template>
  <div class="wrapper">
     <div id="container">
        <div class="open-book">
          <router-view v-slot="{ Component, route }">
            <!-- <keep-alive> -->
              <div class="page" ref="refDom" >
                <!-- <el-row class="header"><div class="right"></div><div class="left"></div></el-row> -->
                <div class="app-main">
                  <transition name="turn" mode="out-in"
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"
                    :duration="{ enter: 2000, leave: 2000 }"
                    >
                    <component :is="Component" :key="route.path"/>
                  </transition>
                </div>
                <!-- <el-row class="footer"><div class="right"></div><div class="left"></div></el-row> -->
              </div>
            <!-- </keep-alive> -->
          </router-view>
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
import { reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  components:{
  },
  mixins: [ResizeMixin],
  setup() {

    const show = ref(false)
    const refDom = ref({})
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      farword: false
    })
    router.afterEach((to, from) => {
      var fromId = from.params.id;
      var toId = to.params.id;
      if(fromId > toId) state.farword = false
      else state.farword = true
    })
    return {
      show,
      refDom,
      beforeEnter: (el) =>{
      },
      enter: (el, done) =>{
        done();
      },
      leave: (el, done) =>{
        var action = "";
        if(state.farword) action = 'right';
        else action = 'left';
        var page = refDom.value.getElementsByClassName(action)[0]
        page.classList.add("turn-" + action)
        var content = page.children[0]
        content.classList.add("hide-content")
        setTimeout(()=>{
          done();
        }, 1000)
      }
    }
  },
}
</script>

<style>

  .content-fade{
    transition: opacity 0.5s ease;
  }
  .turn-left{
    transform-style: preserve-3d;
    animation-fill-mode:forwards;
    transform-origin: right;
    animation: turn-left 1s;
    background-color: white;
  }

  .turn-right{
    transform-style: preserve-3d;
    animation-fill-mode:forwards;
    transform-origin: left;
    animation: turn-right 1s;
    background-color: white;
  }
  .hide-content{
    animation: hide 1s;
  }

  @keyframes turn-left  {
      from{

      }
      50% {
        transform: rotateY(90deg);
        content: '';
        z-index: 0;
      } 
      to {
        transform: rotateY(170deg);
        content: '';
        z-index: 1;
      }
  }

  @keyframes turn-right  {
      from{

      }
      50% {
        transform: rotateY(90deg);
        content: '';
        z-index: 0;
      } 
      to {
        transform: rotateY(170deg);
        content: '';
        z-index: 1;
      }
  }
  
  @keyframes hide  {
      from{

      }
      50% {
      } 
      to {
        opacity: 0;
      }
  }
</style>