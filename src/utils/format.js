export default {
  datetime(val) {
    if (!val) {
      return ''
    }
    const data = new Date(val)
    if (!data) {
      return ''
    }
    return data.toLocaleString()
  },

  decimal(val) {
    if (typeof val === 'string') {
      val = Number(val)
    }
    if (!Number.isFinite(val)) {
      return ''
    }
    return val.toFixed(2)
      .replace('.', ',')
      .replace(/\d(?=(\d{3})+,)/g, '$&.')
  }
}