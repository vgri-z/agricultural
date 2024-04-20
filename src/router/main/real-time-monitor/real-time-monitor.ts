const real_time_monitor = () =>
  import('@/views/main/real-time-monitor/real-time-monitor.vue')

export default {
  path: '/main/real-time-monitor',
  name: '实时监控',
  component: real_time_monitor,
  children: []
}
