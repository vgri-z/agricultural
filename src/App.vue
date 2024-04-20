<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
