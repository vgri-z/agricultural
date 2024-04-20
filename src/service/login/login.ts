import { vgriRequest } from '..'
import { ILoginAccount } from '@/views/login/types/type'
import { AxiosHeaders } from 'axios'
import { IDataLoginRes, IDataType } from '../types'
import { IUserInfo } from './type'
import { IMenuItem } from '@/components/nav-menu/types/type'
import { userMenus } from '@/components/nav-menu/src/data/menu'

// 登录
export function login(data: ILoginAccount) {
  // return vgriRequest.post({
  //   url: '/login',
  //   data,
  //   headers: new AxiosHeaders()
  // })

  return new Promise<IDataLoginRes>((resolve) => {
    const res: IDataLoginRes = {
      code: 200,
      token: `${new Date().getTime()}${Math.ceil(Math.random() * 10000)}`
    }
    resolve(res)
  })
}

// 获取用户信息
export function getUserInfo() {
  return new Promise<IDataType<IUserInfo>>((resolve) => {
    const res: IDataType<IUserInfo> = {
      code: 200,
      data: {
        id: '123123',
        username: 'vgri',
        avatar: 'https://vitejs.cn/logo.svg',
        role: '管理员'
      }
    }
    resolve(res)
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
