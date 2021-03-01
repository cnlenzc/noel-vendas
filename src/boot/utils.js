import * as excecao from 'utils/excecao'
import backend from 'utils/backend'
import format from 'utils/format'
import rules from 'utils/rules'

export default ({ Vue }) => {
  Vue.prototype.$utils = {
    ...excecao
  }
  Vue.prototype.$format = format
  Vue.prototype.$rules = rules

  global.$backend = backend
  global.$format = format
  global.$rules = rules
  global.$verificarErro = excecao.verificarErro
}
