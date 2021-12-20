<template>
  <div>
    <el-dropdown trigger="click">
      <div class="avatar-wrapper">
        語言
      </div>
      <template #dropdown>
        <el-dropdown-item  @click="click('zh-TW')">
          中文
        </el-dropdown-item>
        <el-dropdown-item  @click="click('en-US')">
          English
        </el-dropdown-item>
      </template>
    </el-dropdown> 
  </div>
</template>

<script>
export default {
  name: 'logout',
  methods: {
    click(lang) {
      this.$store.dispatch("app/ChangeLang", lang)
      .then(()=>{
        this.$message('尚未開放! not ready!');
      });
    },
  }
}
</script>

<style lang="scss" scoped>
  .avatar-wrapper{
    font-size: 18px;
    color: #fff
  }
</style>
