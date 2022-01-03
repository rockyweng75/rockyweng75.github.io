<template>
    <Page :id="id"></Page>
</template>

<script setup>
    import Page from '/@/components/Page/index.vue'
    const props = defineProps({
        id: Number
    })
</script>


