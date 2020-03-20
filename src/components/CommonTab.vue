<template>
  <div class="tab-container">
    <el-tag
      :closable="item.name !== 'home'"
      size="small"
      v-for="(item, ind) in tags"
      :key="ind"
      @close="tagClosed(item)"
      @click="tagLink(item)"
      :effect="$route.path == item.path ? 'dark' : 'plain'"
    >{{item.label}}</el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: '',
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  data() {
    return {}
  },
  methods: {
    // 获取vuex的mutations中的方法
    ...mapMutations({
      closeTab: 'closeTab',
      selectMenu: 'selectMenu'
    }),
    // 关闭tag标签时，使用vuex的方法，删除该条数据
    tagClosed(item) {
      this.closeTab(item)
    },
    // 点击tag标签跳转时，使用vuex的方法，把该条数据存到vuex中，因为数据改变要同步vuex中的数据，这样页面其他地方使用数据会同事更新
    tagLink(item) {
      this.$router.push(item.path)
      this.selectMenu(item)
      console.log(this.$route)
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.tab-container {
  padding: 15px 15px 0;
}
.el-tag {
  margin-right: 15px;
  cursor: pointer;
}
</style>
