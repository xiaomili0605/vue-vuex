<template>
  <div class="header-container">
    <div class="header-l">
      <el-button type="primary" icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- 使用路由信息的path和当前获取到的数据进行比较判断，true显示，false不显示 -->
        <el-breadcrumb-item :to="{ path: current.path}" v-if="current">{{current.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-r">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="imgUser" alt />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: '',
  data() {
    return {
      imgUser: require('../assets/images/user.png')
    }
  },
  computed: {
    // 使用vuex中state中的数据
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  methods: {
    // 点击按钮，
    collapseMenu() {
      this.$store.commit('collapseMenu')
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.header-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-l {
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 20px;
    }
  }
  .header-r {
    display: flex;
    align-items: center;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-top: 5px;
    }
  }
}
</style>
