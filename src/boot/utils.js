import * as excecao from 'utils/excecao'
import backend from 'utils/backend'
import clonar from 'utils/clonar'
import format from 'utils/format'
import rules from 'utils/rules'

export default ({ Vue }) => {
  const utils = {
    ...excecao,
    clonar
  }

  Vue.prototype.$format = format
  Vue.prototype.$rules = rules
  Vue.prototype.$utils = utils

  global.$backend = backend
  global.$format = format
  global.$rules = rules
  global.$utils = utils
  global.$verificarErro = excecao.verificarErro
}
