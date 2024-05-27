export interface IDataLoginRes {
  code: number
  msg: string
  token: string
}

export interface IUserInfo {
  code: string
  msg: string
  permissions: any[]
  roles: string[]
  user: any
}
