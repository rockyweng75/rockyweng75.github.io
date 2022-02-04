<template>
    <div class="content">
        <el-row v-if="currentPage" class="left">
            <el-col :span="24" >
                <header>
                    <h6>{{currentPageNumber}}</h6>
                </header>
                <h2 class="chapter-title"  >{{currentPage.header}}</h2>
                <h2 class="chapter-image" v-if="imageSize && imageSize > 50"> 
                    <el-avatar fit="fill" shape="square" :size="imageSize" :src="currentPage.image">
                        <img
                            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                        />
                    </el-avatar>
                </h2>
                <!-- <footer><label id="page-numbers">{{currentPageNumber}}</label></footer> -->
            </el-col>
        </el-row>
        <el-row class="right" v-if="currentPage">
            <el-col :span="24">
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
    </div>
</template>

<script>
import { computed, ref, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default {
    props:['id'],
    setup(prop) {
        const refDom = ref({})
        const store = useStore()
        const router = useRouter()

        // onBeforeMount(()=>{
        //     store.dispatch('page/getPage', prop.id)
        // })

        const currentPage = computed(()=> store.getters['page/currentPage'])
        const currentPageNumber = computed(()=> store.getters['page/currentPageNumber'])

        const goto = (url) => {
            router.push(url)
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
    .page-right {
        padding-left: 3em;
        z-index:255;
    }
    .page-left {
        padding-right: 3em;
        z-index:255;
    }
</style>
  

