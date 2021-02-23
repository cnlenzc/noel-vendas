export default ({ Vue }) => {
  Vue.mixin({
    methods: {
      async tryCatch(callback, param) {
        try {
          await callback(param)
        } catch (erro) {
          const mensagem = !!param && typeof param === 'object' && !!param.erro
            ? param.erro
            : 'Ops! Ocorreu um erro'
          this.$q.notifyError(mensagem, erro)
        }
      },

      async tryLoading(callback, param) {
        try {
          this.$q.loading.show()
          await callback(param)
        } catch (erro) {
          const mensagem = !!param && typeof param === 'object' && !!param.erro
            ? param.erro
            : 'Ops! Ocorreu um erro'
          this.$q.notifyError(mensagem, erro)
        } finally {
          this.$q.loading.hide()
        }
      }
    }
  })
}
