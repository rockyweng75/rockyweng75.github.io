<template>
    <Cover></Cover>
</template>

<script setup>
    import Cover from '/@/components/Cover/index.vue'
    import { useStore } from 'vuex'
    const store = useStore()
    store.dispatch('page/getPages')
</script>

