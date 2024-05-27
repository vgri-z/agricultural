import { vgriRequest } from '..'
import { ILoginAccount } from '@/views/login/types/type'
import { AxiosHeaders } from 'axios'
import { IDataType } from '../types'
import { IUserInfo, IDataLoginRes } from './type'
import { IMenuItem } from '@/components/nav-menu/types/type'
import { userMenus } from '@/components/nav-menu/src/data/menu'

// 登录
export function login(data: ILoginAccount) {
  return vgriRequest.post<IDataLoginRes>({
    url: '/login',
    data,
    headers: new AxiosHeaders({
      isToken: false
    })
  })
}

// 获取用户信息
export function getUserInfo() {
  return vgriRequest.get<IUserInfo>({
    url: '/getInfo',
    headers: new AxiosHeaders()
  })
}

// 获取用户菜单
export function getUserMenus(data: { id: string }) {
  return new Promise<IDataType<IMenuItem[]>>((resolve) => {
    const res = {
      code: 200,
      data: userMenus
    }
    resolve(res)
  })
}
