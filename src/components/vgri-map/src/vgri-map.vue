<template>
  <div class="vgri-map" id="map"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const map = ref(null)
const initMap = () => {
  map.value = new BMapGL.Map('map') // 创建地图实例
  const point = new BMapGL.Point(104.072425, 30.663503) // 创建点坐标
  map.value.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
  map.value.enableScrollWheelZoom(true)
  // map.value.setHeading(64.5) //设置地图旋转角度
  // map.value.setTilt(73) //设置地图的倾斜角度
}

onMounted(() => {
  initMap()
})
</script>

<style scoped lang="less">
.vgri-map {
  width: 100%;
  height: 100%;
}
</style>
