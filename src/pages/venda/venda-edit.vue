<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 1200px">
      <div class="row q-mb-md">
        <div class="col text-h5">venda</div>
        <div class="col-auto"># {{ campos._id }}</div>
      </div>
      <q-form @submit="tryLoading(salvar)" class="q-gutter-sm">
        <div class="row items-baseline">
          <q-input v-model="campos.idCliente" label="cliente" class="col-12" />
        </div>
        <div class="row items-baseline">
          <q-input v-model="campos.idProduto" label="produto" class="col-6 col-md-3" filled />
          <q-input filled v-model="campos.quantidade" label="quantidade" mask="#.##" fill-mask="0" reverse-fill-mask
            class="col-6 col-md-3 q-pl-md" input-class="text-right" lazy-rules
            :rules="[ val => !!val || 'obrigatório' ]" />
        </div>
        <div class="row items-baseline">
          cadastro: <strong class="q-ml-md">{{ $format.datetime(campos.datahora_cadastro) }}</strong>
        </div>
        <div>
          <q-btn label="salvar" type="submit" color="primary" />
          <q-btn v-if="campos._id" label="remover" color="negative" class="q-ml-sm" @click="tryLoading(remover)" />
          <q-btn label="voltar" color="primary" flat class="q-ml-sm" :to="{ name: 'venda-list' }" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'venda-edit',

    data() {
      return {
        campos: {}
      }
    },

    methods: {
      async atualizar() {
        if (!this.$route.params.id) {
          this.$set(this.campos, 'quantidade', '1.00')
          this.$set(this.campos, 'datahora_cadastro', new Date())
        }

        try {
          loading.show()
          if (this.$route.params.id) {
            const resposta = await backend('get', 'venda/' + this.$route.params.id)
            this.campos = resposta.data
          }
        } catch (erro) {
          notifyError('erro na consulta', erro)
        } finally {
          loading.hide()
        }
      },

      async salvar() {
        if (this.campos._id) {
          await backend('put', 'venda/' + this.campos._id, { ...this.campos, _id: undefined })
        } else {
          await backend('post', 'venda', this.campos)
        }
        notifyPositive('salvou com sucesso')
        this.$router.push({ name: 'venda-list' })
      },

      async remover() {
        await backend('delete', 'venda/' + this.campos._id)
        notifyPositive('removido com sucesso')
        this.$router.push({ name: 'venda-list' })
      }
    },

    mounted() {
      this.atualizar()
    }
  }
</script>