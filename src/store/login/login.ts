import { defineStore } from 'pinia'
import { ILoginState } from './type'
import { login, getUserInfo, getUserMenus } from '@/service/login/login'
import { ILoginAccount } from '@/views/login/types/type'
import { localCache } from '@/utils'
import { IMenuItem } from '@/components/nav-menu/types/type'
import { mapMenusToRoutes } from '@/utils/map-menu'

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    loginAccount: null,
    token: null,
    userInfo: null,
    userMenus: null
  }),
  actions: {
    async loginAction(payload: ILoginAccount) {
      const loginRes = await login(payload)
      // 保存token
      this.token = loginRes.token
      localCache.setCache('token', this.token)

      // 获取用户信息-> 保存用户信息
      const userInfoRes = await getUserInfo()
      this.userInfo = userInfoRes.data
      localCache.setCache('userInfo', this.userInfo)

      // 根据用户信息获取用户的菜单 -> 保存用户菜单
      const userMenusRes = await getUserMenus({ id: this.userInfo.id })
      this.userMenus = userMenusRes.data
      localCache.setCache('userMenus', this.userMenus)

      // 根据用户菜单动态匹配路由，添加到main下面去
      this.addMainRoutesAction(this.userMenus)
    },
    addMainRoutesAction(userMenus: IMenuItem[]) {
      mapMenusToRoutes(userMenus)
    }
  }
})

export default useLoginStore
