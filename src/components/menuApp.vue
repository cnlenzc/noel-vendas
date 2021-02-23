<template>
  <q-list>
    <q-item-label header class="text-grey-8">
      Menu
    </q-item-label>
    <menuItem v-for="link in listaMenu" :key="link.title" v-bind="link" />
  </q-list>
</template>

<script>
  import menuItem from 'components/menuItem.vue'

  export default {
    name: 'menuApp',

    components: {
      menuItem
    },

    computed: {
      listaMenu() {
        return [
        {
            title: 'Home',
            caption: 'página inicial',
            icon: 'home',
            link: { name: 'home' }
          },
          {
            title: 'Produtos',
            caption: 'cadastro',
            icon: 'school',
            link: { name: 'produto-list' }
          }
        ]
      }
    }
  }
</script>