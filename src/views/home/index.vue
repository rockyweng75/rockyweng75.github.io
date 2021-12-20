<template>
    <Page></Page>
</template>

<script setup>
    import Page from '/@/components/Page/index.vue'
    import { useStore } from 'vuex'
    const store = useStore()
    store.dispatch('page/getPages')
</script>

