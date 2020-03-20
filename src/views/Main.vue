<template>
  <el-container>
    <!-- 左右区域-->
    <!-- 通过判断控制折叠展开的isCollapse，ture为折叠设置为64排序，false为展开设置200px -->
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <common-aside></common-aside>
    </el-aside>
    <!-- 右边区域 -->
    <el-container>
      <!-- header 区域 -->
      <el-header>
        <common-header></common-header>
      </el-header>
      <!-- tab 区域 -->
      <common-tab></common-tab>
      <!-- main 区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '../components/CommonHeader'
import CommonAside from '../components/CommonAside'
import CommonTab from '../components/CommonTab'
export default {
  name: '',
  data() {
    return {}
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
}
</script>

<style scoped lang="scss">
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  background: #333;
  height: 100%;
}
</style>
