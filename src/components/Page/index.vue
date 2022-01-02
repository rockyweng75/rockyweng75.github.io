<template>
  <div class="open-book" ref="refDom">
        <el-row class="header turn-header"></el-row>
        <el-row class="turn-content">
            <el-col :span="12" class="content-right">
                <header>
                    <h6>{{currentPageNumber}}</h6>
                </header>
                <h2 class="chapter-title">{{currentPage.header}}</h2>
                <h2 class="chapter-image" v-if="imageSize > 50"> 
                    <el-avatar fit="fill" shape="square" :size="imageSize" :src="currentPage.image">
                        <img
                            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                        />
                    </el-avatar>
                </h2>
                <!-- <footer><label id="page-numbers">{{currentPageNumber}}</label></footer> -->
            </el-col>
            <el-col :span="12" class="content-left">
                <header>
                    <h6>{{parseInt(currentPageNumber) + 1}}</h6>
                </header>
                <template v-if="currentPage.content">
                    <p v-for="(row, index) in currentPage.content.row" v-bind:key="index">
                        <template v-if="row.text">{{row.text}}</template>
                        <template v-if="row.br"><br/></template>
                        <template v-if="row.html"><div v-html="row.html"></div></template>
                        <template v-if="row.avatar">
                            <el-avatar fit="fill" shape="square" :size="row.avatar.size" :src="row.avatar.url">
                                <img
                                    src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                                />
                            </el-avatar>
                        </template>
                        <template v-if="row.buttonGroup">
                            <el-button-group>
                                <el-button v-for="btn in row.buttonGroup" 
                                    v-bind:key="btn.name"
                                    v-on:click="goto(btn.url)"
                                    >
                                    {{btn.name}}
                                </el-button>
                            </el-button-group>
                        </template>
                        <template v-if="row.button">
                            <el-button v-on:click="goto(row.button.url)">
                                {{row.button.name}}
                            </el-button>
                        </template>
                    </p>
                    <p class="last-row">
                        <el-button-group>
                            <el-button v-for="btn in currentPage.action" 
                                v-bind:key="btn.name"
                                v-on:click="goto(btn.url)"
                                >
                                {{btn.name}}
                            </el-button>
                        </el-button-group>
                    </p>
                </template>
            </el-col>
        </el-row>
        <el-row class="footer turn-footer">
            
        </el-row>
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

        const currentPage = computed(()=> store.getters['page/currentPage'])
        const currentPageNumber = computed(()=> store.getters['page/currentPageNumber'])

        const open = () =>{
            var el = document.getElementsByClassName('content-left')[0];
            var elc = document.getElementsByClassName('content-right')[0];
            el.classList.add("turn-left")
            elc.classList.add("turn-left-content")
        }
        const goto = (url) => {
            open()
            setTimeout(()=> router.push(url), 2000)
        }

        const windowsWidth = computed(()=> store.getters['app/windowsWidth'])
        const imageSize = computed(()=>{
            if(windowsWidth.value / 2 > 600){
                return 400
            } else {
                return Math.round(windowsWidth.value) / 2 - 150
            }
        })
        return {
            refDom,
            currentPage,
            currentPageNumber,
            goto,
            windowsWidth,
            imageSize
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
        50% {
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
  

