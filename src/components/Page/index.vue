<template>
  <div class="open-book">
        <el-row class="header turn-header"></el-row>
        <el-row class="turn-content">
            <el-col :span="12" class="content-right">
                <header>
                    <h6>{{currentPage.rightTitle}}</h6>
                </header>
                <h2 class="chapter-title">{{currentPage.header}}</h2>
                <h2 class="chapter-image" v-if="imageSize > 50"> 
                    <el-avatar fit="fill" shape="square" :size="imageSize" :src="currentPage.image">
                        <img
                            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                        />
                    </el-avatar>
                </h2>
                <footer><label id="page-numbers">{{currentPageNumber}}</label></footer>
            </el-col>
            <el-col :span="12" class="content-left">
                <header>
                    <h6>{{currentPage.leftTitle}}</h6>
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
                    <p>{{windowsWidth}} / {{imageSize}}</p>
                </template>
            </el-col>
        </el-row>
        <el-row class="footer turn-footer">

        </el-row>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore()
        const router = useRouter()

        const currentPage = computed(()=> store.getters['page/currentPage'])
        const currentPageNumber = computed(()=> store.getters['page/currentPageNumber'])
        const goto = (url) => router.push(url)
        const windowsWidth = computed(()=> store.getters['app/windowsWidth'])
        const imageSize = computed(()=>{
            if(windowsWidth.value / 2 > 600){
                return 400
            } else {
                return Math.round(windowsWidth.value) / 2 - 150
            }
        })
        return {
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
    .turn-header:before {
        /* transform-style: preserve-3d;
        animation: anim2 3s ;
        width: 100%;
        background: white;*/
        /* transform: rotateY(0deg); */
        transform-origin: right;

        /* width: 100px;
        margin-left: -100px;
        background: white */
    }
    .turn-header:after {
       transform-style: preserve-3d;
        animation: turn-left 2s ;
        background: white;
        transform-origin: left;
    }

    .turn-content > .content-left {
       transform-style: preserve-3d;
        animation: turn-left 2s ;
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
        animation: turn-left 2s ;
        background: white;
        transform-origin: left;
    }


    @keyframes turn-left  {
        from{
            
        }
        50% {
            transform: rotateY(90deg);
            /* visibility:hidden; */
        } 
        to {
            transform: rotateY(160deg);
            /* visibility:hidden; */
        }
    }

    @keyframes turn-right  {
        from{
            
        }
        50% {
            transform: rotateY(90deg);
            /* visibility:hidden; */
        } 
        to {
            transform: rotateY(176deg);
            /* visibility:hidden; */
        }
    }

</style>
  

