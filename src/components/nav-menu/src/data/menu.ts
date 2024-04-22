import { IMenuItem } from '../../types/type'

export const userMenus: IMenuItem[] = [
  {
    displayName: '合作社概况',
    hasUrl: false,
    icon: 'Box',
    id: '1',
    isLeaf: true,
    name: '合作社概况',
    order: 1,
    parentId: '0',
    permission: null,
    url: '/main/co-op-overview',
    children: []
  },
  {
    displayName: '实时监控',
    hasUrl: false,
    icon: 'Monitor',
    id: '2',
    isLeaf: true,
    name: '实时监控',
    order: 2,
    parentId: '0',
    permission: null,
    url: '/main/real-time-monitor',
    children: []
  },
  {
    displayName: '轨迹回放',
    hasUrl: false,
    icon: 'Guide',
    id: '3',
    isLeaf: true,
    name: '轨迹回放',
    order: 3,
    parentId: '0',
    permission: null,
    url: '/main/track-playback',
    children: []
  },
  {
    displayName: '作业量统计',
    hasUrl: false,
    icon: 'DataLine',
    id: '4',
    isLeaf: true,
    name: '作业量统计',
    order: 4,
    parentId: '0',
    permission: null,
    url: '/main/work-statistic',
    children: []
  },
  {
    displayName: '作业质量分析',
    hasUrl: false,
    icon: 'FirstAidKit',
    id: '5',
    isLeaf: true,
    name: '作业质量分析',
    order: 5,
    parentId: '0',
    permission: null,
    url: '/main/work-quality-analyse',
    children: []
  },
  {
    displayName: '作业区界分析',
    hasUrl: false,
    icon: 'Paperclip',
    id: '6',
    isLeaf: true,
    name: '作业区界分析',
    order: 6,
    parentId: '0',
    permission: null,
    url: '/main/work-range-analyse',
    children: []
  },
  {
    displayName: '跨区作业分析',
    hasUrl: false,
    icon: 'DataAnalysis',
    id: '7',
    isLeaf: true,
    name: '跨区作业分析',
    order: 7,
    parentId: '0',
    permission: null,
    url: '/main/cross-work-analyse',
    children: []
  },
  {
    displayName: '农机信息管理',
    hasUrl: false,
    icon: 'Notebook',
    id: '8',
    isLeaf: true,
    name: '农机信息管理',
    order: 8,
    parentId: '0',
    permission: null,
    url: '/main/machine-info-manage',
    children: []
  }
]
