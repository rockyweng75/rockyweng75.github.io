<template>
    <Page :id="id"></Page>
</template>

<script setup>
    import Page from '/@/components/AttackPage/index.vue'
    import { useStore } from 'vuex';
    const store = useStore()
    const props = defineProps({
        id: Number
    })
    store.dispatch('attack/getAttack', props.id)
</script>


