<template>
  <div class="login">
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ILoginAccount } from './types/type'
import useLoginStore from '@/store/login/login'

const account = reactive<ILoginAccount>({
  username: 'vgri',
  password: '123456'
})
const loginStore = useLoginStore()

const login = () => {
  loginStore.loginAction(account)
}
</script>

<style scoped lang="less"></style>
