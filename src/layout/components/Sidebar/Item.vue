<template>
  <template v-if="icon">
    <!-- <i v-if="icon.includes('el-icon')" :class="[icon, 'sub-el-icon']" /> -->
    <!-- <SvgIcon v-else :icon-class="icon"/> -->
  </template>
  <span v-if="title">{{ title }}</span>
</template>
<script>
import SvgIcon from '/@/components/SvgIcon/index.vue'
export default {
  components:{SvgIcon},
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped>

.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
