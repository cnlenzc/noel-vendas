export default ({ Vue }) => {
  const $q = Vue.prototype.$q

  $q.notifyError = function (message, error = {}) {
    if (error && error.name && ['Alerta', 'ErroValidacao'].includes(error.name)) {
      message = error.message
    }

    if (error && !['Alerta', 'ErroValidacao'].includes(error.name)) {
      console.error('Mensagem ao usuário:', message, '\n', error.stack)
    } else {
      console.error('Mensagem ao usuário:', message)
    }

    $q.notify({
      message,
      position: 'top',
      timeout: 60000,
      actions: [{ icon: 'close', color: 'white' }],
      type: error.name === 'Alerta' ? 'warning' : 'negative'
    })

    return message
  }

  $q.notifyPositive = function (message) {
    return $q.notify({ message, type: 'positive' })
  }

  global.loading = $q.loading
  global.notifyError = $q.notifyError
  global.notifyPositive = $q.notifyPositive
}
