<template>
    <!-- <Page></Page> -->
    TEST
</template>

<script setup>
    import Page from '/@/components/Page/index.vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const props = defineProps({
        id: Number
    })
    console.log(props)
    store.dispatch('page/getPage', props.id)
</script>


