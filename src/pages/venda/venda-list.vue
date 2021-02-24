<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table title="vendas" :data="lista" :columns="columns" row-key="id">
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn size="sm" color="primary" round dense
                :to="{ name: 'venda-edit', params: { id: props.cols[0].value } }" icon="edit" />
            </q-td>
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <q-btn color="primary" label="adicionar" :to="{ name: 'venda-edit' }" />
  </q-page>
</template>

<script>
  export default {
    name: 'venda-list',

    computed: {
      columns() {
        return [
          { name: 'cliente', align: 'left', label: 'cliente', field: 'idCliente', sortable: true },
          { name: 'produto', align: 'left', label: 'produto', field: 'idProduto', sortable: true },
          { name: 'quantidade', align: 'right', label: 'quantidade', field: 'quantidade', sortable: true, format: format.decimal },
          { name: 'datahora_cadastro', align: 'left', label: 'cadastro', field: 'datahora_cadastro', sortable: true, format: format.datetime }
        ]
      }
    },

    data() {
      return {
        lista: []
      }
    },

    methods: {
      async atualizar() {
        try {
          loading.show()
          const resposta = await backend('get', 'venda')
          this.lista = resposta.data.map(p => ({ ...p, categoria_nome: (p.categoria || {}).nome || '' }))
        } catch (erro) {
          notifyError('erro na consulta', erro)
        } finally {
          loading.hide()
        }
      }
    },

    mounted() {
      this.atualizar()
    }
  }
</script>