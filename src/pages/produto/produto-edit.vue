<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 1200px">
      <div class="row q-mb-md">
        <div class="col text-h5">produto</div>
        <div class="col-auto"># {{ campos._id }}</div>
      </div>
      <q-form @submit="$tryLoading(salvar)" class="q-gutter-sm">
        <div class="row items-baseline">
          <q-input v-model="campos.descricao" label="descrição" class="col-12" outlined autofocus lazy-rules
            :rules="[ $rules.obrigatorio ]" />
        </div>
        <div class="row items-baseline">
          <!-- <q-select outlined clearable emit-value map-options v-model="campos.categoriaid" :options="opcoesCategotias"
            label="categoria" class="col-6 col-md-3" /> -->
          <q-input v-model="campos.unidade" label="unidade" class="col-6 col-md-3 q-pr-md" outlined />
          <q-input outlined v-model="campos.valor" label="valor" mask="#.##" fill-mask="0" reverse-fill-mask
            class="col-6 col-md-3 q-pr-md" input-class="text-right" lazy-rules :rules="[ $rules.obrigatorio ]" />
        </div>
        <div class="row items-baseline">
          cadastro: <strong class="q-ml-md">{{ $format.datetime(campos.datahora_cadastro) }}</strong>
        </div>
        <div>
          <q-btn label="salvar" type="submit" color="primary" no-caps />
          <q-btn v-if="campos._id" label="remover" color="negative" class="q-ml-sm" @click="$tryLoading(remover)"
            no-caps />
          <q-btn label="voltar" color="primary" flat class="q-ml-sm" :to="{ name: 'produto-list' }" no-caps />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'produto-edit',

    data() {
      return {
        campos: {}
        // opcoesCategotias: []
      }
    },

    methods: {
      async atualizar() {
        if (!this.$route.params.id) {
          this.$set(this.campos, 'datahora_cadastro', new Date())
          this.$set(this.campos, 'unidade', 'UN')
        }

        try {
          $loading.show()
          if (this.$route.params.id) {
            const resposta = await $backend('get', 'produto/' + this.$route.params.id)
            this.campos = resposta.data
          }
          // const categorias = await $backend('get', 'categoria')
          // this.opcoesCategotias = categorias.data.map(c => ({ label: c.nome, value: c.id }))
        } catch (erro) {
          $notifyError('erro na consulta', erro)
        } finally {
          $loading.hide()
        }
      },

      async salvar() {
        if (this.campos._id) {
          await $backend('put', 'produto/' + this.campos._id, { ...this.campos, _id: undefined })
        } else {
          await $backend('post', 'produto', this.campos)
        }
        $notifyPositive('produto salvo com sucesso')
        this.$router.push({ name: 'produto-list' })
      },

      async remover() {
        await $backend('delete', 'produto/' + this.campos._id)
        $notifyPositive('produto removido com sucesso')
        this.$router.push({ name: 'produto-list' })
      }
    },

    mounted() {
      this.atualizar()
    }
  }
</script>