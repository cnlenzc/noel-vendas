<template>
  <div>
    <!-- <q-img class="bg-primary" style="height: 150px">
      <div class="bg-primary">
        <q-btn flat round dense icon="menu" size="md" class="q-mb-sm" @click="$emit('fechar')" />
      </div>
    </q-img>
    <q-btn flat round dense icon="person" @click="usuarioVisivel = !usuarioVisivel" /> -->
    <!-- <div class="bg-primary q-pa-sm">
      <q-btn flat round dense color="white" icon="menu" @click="$emit('fechar')" />
      menu
    </div> -->
    <q-toolbar class="bg-primary text-white">
      <q-btn flat round dense icon="menu" @click="$emit('fechar')" />
      <q-toolbar-title>
        menu
      </q-toolbar-title>
    </q-toolbar>
    <q-list class="q-mt-md">
      <menu-item v-for="link in listaMenu" :key="link.title" v-bind="link" />
    </q-list>
  </div>
</template>

<script>
  import menuItem from 'components/menu-item.vue'

  export default {
    name: 'menu-app',

    components: {
      menuItem
    },

    computed: {
      listaMenu() {
        return [
          {
            title: 'home',
            caption: 'página inicial',
            icon: 'home',
            link: { name: 'home' }
          },
          {
            title: 'clientes',
            icon: 'people',
            link: { name: 'contato-list' }
          },
          {
            title: 'vendas',
            icon: 'shopping_cart',
            link: { name: 'venda-edit' }
          },
          {
            title: 'produtos',
            icon: 'card_giftcard',
            link: { name: 'produto-list' }
          }
        ]
      }
    }
  }
</script>