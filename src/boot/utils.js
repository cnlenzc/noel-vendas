import * as excecao from 'utils/excecao'
import backend from 'utils/backend'
import format from 'utils/format'

export default ({ Vue }) => {
  Vue.prototype.$utils = {
    ...excecao,
    backend
  }
  Vue.prototype.$format = format

  global.backend = backend
  global.format = format
  global.verificarErro = excecao.verificarErro
}
