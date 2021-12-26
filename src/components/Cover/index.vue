<template>
    <div class="front-cover" v-on:click="open" ref="refDom">
        <el-row>
            <el-col :span="12">
            </el-col>
            <el-col :span="12" class="content-right">
                <div class="chapter-title">{{title}}</div>
            </el-col>
        </el-row>
    </div>
    <div class="front-cover-bottom">
        <el-row class="header"></el-row>
        <el-row class="content"></el-row>
        <el-row class="footer"></el-row>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {
        const refDom = ref({})
        const store = useStore()
        const router = useRouter()
        const title =  computed(()=> import.meta.env.VITE_APP_TITLE)

        const goto = (url) => router.push(url)
        const open = () =>{
            var el = document.getElementsByClassName('front-cover')[0];
            var elc = document.getElementsByClassName('content-right')[0];
            el.classList.add("turn-left")
            elc.classList.add("turn-left-content")
            setTimeout(()=>goto('/page/1'), 2000)
        }

        return {
            refDom,
            title,
            open
        }
    },
}
</script>
<style scoped>
    
    .turn-left{
        transform-style: preserve-3d;
    }
    .turn-left-content{
        transform-style: preserve-3d;
        animation: turn-left-content 2s;
        animation-fill-mode:forwards;
        transform-origin: left;
    }
    .turn-left::before{
        transform-style: preserve-3d;
        animation: turn-left 2s;
        animation-fill-mode:forwards;
        transform-origin: left;
    }

    .turn-header:before {
        transform-style: preserve-3d;
        /* animation: turn-left 2s ; */
        background: white;
        transform-origin: right;
    }
    .turn-header:after {
        transform-style: preserve-3d;
        /* animation: turn-left 2s ; */
        background: white;
        transform-origin: left;
    }

    .turn-content > .content-left {
       transform-style: preserve-3d;
        /* animation: turn-left 2s ; */
        background: white;
        transform-origin: left;
    }

    .turn-footer:before {
        transform-style: preserve-3d;
        /* animation: turn-right 2s ; */
        background: white;
        transform-origin: right;
    }
    .turn-footer:after {
        transform-style: preserve-3d;
        /* animation: turn-left 2s ; */
        background: white;
        transform-origin: left;
    }


    @keyframes turn-left  {
        from{
            
        }
        45% {
            transform: rotateY(90deg);
            
        } 
        to {
            transform: rotateY(160deg);

        }
    }
    @keyframes turn-left-content  {
        from{
            
        }
        45% {
            transform: rotateY(90deg);
            visibility:hidden;
        } 
        to {
            transform: rotateY(160deg);
            visibility:hidden;
        }
    }

    @keyframes turn-right  {
        from{
            
        }
        50% {
            transform: rotateY(90deg);
            visibility:hidden;
        } 
        to {
            transform: rotateY(176deg);
            visibility:hidden;
        }
    }



</style>
  

