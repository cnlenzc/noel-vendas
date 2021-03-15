
const $tryCatch = async function (callback, message, args) {
  try {
    await callback(args)
  } catch (erro) {
    $notifyError(message || 'Ops! Ocorreu um erro', erro)
  }
}

const $tryLoading = async function (callback, message, args) {
  try {
    $loading.show()
    await callback(args)
  } catch (erro) {
    $notifyError(message || 'Ops! Ocorreu um erro', erro)
  } finally {
    $loading.hide()
  }
}

export default ({ Vue }) => {
  Vue.mixin({
    methods: {
      $tryCatch,
      $tryLoading
    }
  })

  global.$tryCatch = $tryCatch
  global.$tryLoading = $tryLoading
}
