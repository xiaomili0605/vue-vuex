export default {
    state: {
        // 当前点击的菜单标签数据 {}
        currentMenu: null,
        // 2 tag渲染tabsList数据[{}]，点击一次左侧菜单栏标签，往这里添加一条数据，过滤重复的
        tabsList: [
            // 默认显示首页，因为默认尽量就会显示首页，首页是不可关闭的
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 's-home'
            }
        ],
        // 3 控制页面展开折叠
        isCollapse: false
    },
    mutations: {
        // 初始时currentMenu为空，点击左侧菜单时通过该方法把当前点击的数据保存到currentMenu
        // 首页不需要显示，判断是首页时赋值null，在渲染组件中通过v-if判断为null即为false不显示
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                // 2 使用findIndex找到索引，没有返回-1，没有是添加到tabsList，这样即可不添加重复的
                const result = state.tabsList.findIndex(item => item.name == val.name)
                result == -1 ? state.tabsList.push(val) : null
            } else {
                state.currentMenu = null
            }
        },
        // 关闭tag标签，把该标签的数据在tabsList中删除掉，实现页面删除功能，vuex数据会自动实时更新同步到渲染页面
        closeTab(state, val) {
            // 找到索引，删除这一项
            const result = state.tabsList.findIndex(item => item.name == val.name)
            state.tabsList.splice(result, 1)
        },
        collapseMenu(state) {
          state.isCollapse = !state.isCollapse
        }
    },
    actions: {}
}