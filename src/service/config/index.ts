let BASE_URL = ''
const TIME_OUT = 30000

const mode = import.meta.env.MODE

if (mode === 'development') {
  // 开发环境
  BASE_URL = 'https://mi.xiucore.cn:8888/dev/'
} else if (mode === 'test') {
  // 测试环境
  BASE_URL = 'http://test'
} else if (mode === 'production') {
  // 生产环境
  BASE_URL = 'http://prod'
}

export { BASE_URL, TIME_OUT }
