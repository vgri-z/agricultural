const work_statistic = () =>
  import('@/views/main/work-statistic/work-statistic.vue')

export default {
  path: '/main/work-statistic',
  name: '作业量统计',
  component: work_statistic,
  children: []
}
