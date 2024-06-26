<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/images/logo.svg" alt="logo" />
      <span class="title">vgri-cms</span>
    </div>
    <!-- 菜单 -->
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 有二级菜单 -->
        <template v-if="!item.isLeaf">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <template v-if="item.icon">
                <component :class="item.icon" :is="item.icon"></component>
              </template>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <template v-if="subitem.icon">
                  <component
                    :class="subitem.icon"
                    :is="subitem.icon"
                  ></component>
                </template>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 没有二级菜单 -->
        <template v-else-if="item.isLeaf">
          <el-menu-item
            :index="item.id + ''"
            @click="handleMenuItemClick(item)"
          >
            <template v-if="item.icon">
              <component :class="item.icon" :is="item.icon"></component>
            </template>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { defineProps } from 'vue'
import { pathMapToMenu } from '@/utils/map-menu'
import { IMenuItem } from '../types/type'
import useLoginStore from '@/store/login/login'

defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

// 这里的store是Store<any>类型的，any类型用起来不安全
const router = useRouter()
const route = useRoute()
const loginStore = useLoginStore()
const defaultValue = ref('1')
const currentPath = ref('')
currentPath.value = route.path // 当前路由路径
const userMenus = computed(() => {
  return loginStore.userMenus
})

const menu: IMenuItem = pathMapToMenu(userMenus.value, currentPath.value)
defaultValue.value = menu.id + ''

const handleMenuItemClick = (subitem: IMenuItem) => {
  router.push(subitem.url)
}
</script>

<style scoped lang="less">
.nav-menu {
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
    background: #001429;
  }

  :deep(.el-menu) {
    // 修改菜单图标大小
    svg {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }

  // 目录
  .el-submenu {
    background-color: #001429 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #001429 !important;
    }
  }

  :deep(.el-sub-menu__title) {
    background-color: #001429 !important;

    .el-icon.el-sub-menu__icon-arrow {
      position: absolute;
    }

    // 修改菜单图标大小
    svg {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  // 选中之后菜单高亮颜色
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #3396fb !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
