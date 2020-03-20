<template>
  <!-- :collapse="isCollapse" 控制折叠展开 -->
  <!-- :collapse-transition="false" 关闭动画 -->
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    :collapse="isCollapse"
    :collapse-transition="false"
  >
    <!-- 使用计算属性，比同时使用v-for v-if性能会好很多 -->
    <el-menu-item :index="'' + item1.path" v-for="item1 in noChildren" :key="item1.name" @click="clickMenu(item1)">
      <i :class="'el-icon-' + item1.icon"></i>
      <span slot="title">{{item1.label}}</span>
    </el-menu-item>

    <el-submenu :index="'' + item2.name" v-for="item2 in menuChildren" :key="item2.name">
      <template slot="title">
        <i :class="'el-icon-' + item2.icon"></i>
        <span>{{item2.label}}</span>
      </template>
      <el-menu-item :index="'' + item3.path" v-for="item3 in item2.children" :key="item3.name" @click="clickMenu(item3)">
        <i :class="'el-icon-' + item3.icon"></i>
        <span slot="title">{{item3.label}}</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: '',
  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children)
    },
    menuChildren() {
      return this.asideMenu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  created() {
    console.log(this.noChildren)
    console.log(this.menuChildren)
  },
  data() {
    return {
      asideMenu: [
        {
          path: '/home',
          name: 'home',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/video',
          name: 'video',
          label: '视频管理',
          icon: 'video-play'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user-solid'
        },
        {
          label: '其他',
          icon: 'eleme',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'edit'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'tickets'
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 点击标签时，把数据存到vuex中
    clickMenu(item) {
      this.$store.commit('selectMenu', item)
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.el-menu {
  height: 100%;
  border: 0;
}
</style>
