<template>
    <div class="content">
        <el-row class="left">
        </el-row>
        <el-row class="right"> 
            <h4>Loading ...</h4>              
        </el-row>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const store = useStore()
    const router = useRouter()
    store.commit('attack/setItems', ['肉鬆'])
    const props = defineProps({
        id: Number
    })
    console.log(router)
    router.replace('/page/3')
</script>


