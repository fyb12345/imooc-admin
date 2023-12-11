<script setup>

import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from '@/layout/components/Sidebar/SidebarItem.vue'

const router = useRouter()

const routes = computed(() => {
  const filterRouter = filterRouters(router.getRoutes())
  return generateMenus(filterRouter)
})

// 计算高亮menu 的方法
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :unique-opened="true"
    router
    :default-active="activeMenu"
    :collapse="!$store.getters.sidebarOpened"
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<style scoped lang="scss">

</style>