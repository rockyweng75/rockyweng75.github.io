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
    import { ElMessage } from 'element-plus'

    const store = useStore()
    const router = useRouter()
    var items = store.getters['attack/items']

    if(items.length > 0 && items.some(o => o === '肉鬆')){
        router.replace('/page/8')
    } else {
        ElMessage.error('你身上沒有任何的道具呢。')
        router.go(-1)
    }
</script>


