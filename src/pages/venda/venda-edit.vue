<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 1200px">
      <div class="row q-mb-md">
        <div class="col text-h5">venda</div>
        <div class="col-auto"># {{ campos._id }}</div>
      </div>
      <q-form @submit="$tryLoading(salvar)" class="q-gutter-sm">
        <div class="row items-baseline">
          <q-select v-model="campos.idCliente" label="cliente" class="col-12" :options="opcoesClientes" outlined
            clearable emit-value map-options autofocus />
          <!-- <q-input v-model="campos.idCliente" label="cliente" class="col-12" outlined /> -->
        </div>
        <div v-for="(itemVenda, index) in campos.itensVenda" :key="index">
          <div class="row items-baseline">
            <q-select v-model="itemVenda.idProduto" label="produto" class="col-6 col-md-3" :options="opcoesProdutos"
              @input="adicionarVazio2" outlined clearable emit-value map-options />
            <!-- <q-input v-model="itemVenda.idProduto" label="produto" class="col-6 col-md-3" outlined
              :rules="[ $rules.obrigatorio ]" /> -->
            <q-input v-model="itemVenda.quantidade" label="quantidade" outlined mask="#.##" fill-mask="0"
              reverse-fill-mask class="col-6 col-md-3 q-pl-md" input-class="text-right" lazy-rules
              :rules="[ $rules.obrigatorio ]" />
          </div>
        </div>
        <div class="row items-baseline">
          cadastro: <strong class="q-ml-md">{{ $format.datetime(campos.datahora_cadastro) }}</strong>
        </div>
        <div>
          <q-btn label="salvar" type="submit" color="primary" no-caps />
          <q-btn v-if="campos._id" label="remover" color="negative" class="q-ml-sm" @click="$tryLoading(remover)"
            no-caps />
          <q-btn label="voltar" color="primary" flat class="q-ml-sm" :to="{ name: 'venda-list' }" no-caps />
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
        campos: {},
        opcoesClientes: [],
        opcoesProdutos: []
      }
    },

    methods: {
      atualizar() {
        $tryLoading(async () => {
          const id = this.$route.params.id
          const promiseVenda = id ? $backend('get', 'venda/' + id) : null
          const promiseClientes = $backend('get', 'contato')
          const promiseProdutos = $backend('get', 'produto')
          const venda = promiseVenda
            ? (await promiseVenda).data
            : {}
          this.campos = this.completarCampos(venda)
          this.opcoesClientes = (await promiseClientes).data.map(c => ({ label: c.nome, value: c._id }))
          this.opcoesProdutos = (await promiseProdutos).data.map(c => ({ label: c.descricao, value: c._id }))
        }, 'Erro na consulta')
      },

      completarCampos(campos) {
        campos.datahora_cadastro = campos.datahora_cadastro || new Date()
        campos.itensVenda = campos.itensVenda || []
        return this.adicionarVazio(campos)
      },

      adicionarVazio(campos) {
        const temVazio = campos.itensVenda.reduce((acc, cur) => acc || !cur.idProduto, false)
        !temVazio && campos.itensVenda.push({ quantidade: '1.00' })
        return campos
      },

      adicionarVazio2() {
        const campos = this.campos
        campos.itensVenda = campos.itensVenda || []
        this.adicionarVazio(campos)
      },

      limparCampos(campos) {
        const ret = $utils.clonar(campos)
        ret.itensVenda = ret.itensVenda.filter(c => c.idProduto)
        delete ret._id
        return ret
      },

      async salvar() {
        const id = this.campos._id
        const campos = this.limparCampos(this.campos)
        if (id) {
          await $backend('put', 'venda/' + id, campos)
        } else {
          await $backend('post', 'venda', this.campos)
        }
        $notifyPositive('salvou com sucesso')
        this.$router.push({ name: 'venda-list' })
      },

      async remover() {
        await $backend('delete', 'venda/' + this.campos._id)
        $notifyPositive('removido com sucesso')
        this.$router.push({ name: 'venda-list' })
      }
    },

    mounted() {
      this.atualizar()
    }
  }
</script>