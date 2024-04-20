const track_playback = () =>
  import('@/views/main/track-playback/track-playback.vue')

export default {
  path: '/main/track-playback',
  name: '轨迹回放',
  component: track_playback,
  children: []
}
