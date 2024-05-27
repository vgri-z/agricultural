export function vgriMessage(message: string, type) {
  ElMessage({
    message,
    type: type || 'info'
  })
}
