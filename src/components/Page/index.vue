<template>
  <div class="open-book">
    <header>
        <h1>{{currentPage.rightTitle}}</h1>
        <h6>{{currentPage.leftTitle}}</h6>
    </header>
    <el-row>
        <el-col :span="12">
            <h2 class="chapter-title">{{currentPage.header}}</h2>
            <h2 class="chapter-image" v-if="imageSize > 50"> 
                <el-avatar fit="fill" shape="square" :size="imageSize" :src="currentPage.image">
                    <img
                        src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                    />
                </el-avatar>
            </h2>
        </el-col>
        <el-col :span="12" class="anim">
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
    <footer>
        <ol id="page-numbers">
            <li>{{currentPageNumber}}</li>
            <li>{{currentPageNumber + 1}}</li>
        </ol>
    </footer>
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
    .anim  {
        animation: anim 3s;
        width: 100%;
        background: white;
        border: 1px black solid
    }
    @keyframes anim {
        to {
            transform: rotateY(160deg);
            transform-origin: left;

        }
    }
    .anim2  {
        animation: anim2 1s infinite;
        /* width: 100px;
        margin-left: -100px;
        background: white */
    }

    @keyframes anim2  {
        25% {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(-360deg);
        }
    }

</style>
  

