<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table title="clientes" :data="lista" :columns="columns" row-key="id">
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
              <q-btn size="sm" color="primary" round dense :to="{ name: 'contato-edit', params: { id: props.row._id } }"
                icon="edit" />
            </q-td>
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <q-btn color="primary" label="adicionar" :to="{ name: 'contato-edit' }" no-caps />
  </q-page>
</template>

<script>
  export default {
    name: 'contato-list',

    computed: {
      columns() {
        return [
          { name: 'nome', align: 'left', label: 'nome', field: 'nome', sortable: true },
          { name: 'cpf', align: 'left', label: 'cpf', field: 'cpf', sortable: true },
          { name: 'email', align: 'left', label: 'email', field: 'email', sortable: true },
          { name: 'datahora_cadastro', align: 'left', label: 'cadastro', field: 'datahora_cadastro', sortable: true, format: $format.datetime }
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
          $loading.show()
          const resposta = await $backend('get', 'contato')
          this.lista = resposta.data.map(p => ({ ...p, categoria_nome: (p.categoria || {}).nome || '' }))
        } catch (erro) {
          $notifyError('erro na consulta', erro)
        } finally {
          $loading.hide()
        }
      }
    },

    mounted() {
      this.atualizar()
    }
  }
</script>