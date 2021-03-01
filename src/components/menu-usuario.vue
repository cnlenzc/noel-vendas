<template>
  <div>
    <q-img class="absolute-top bg-primary" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-btn flat round dense icon="person" size="xl" color="grey-8" class="bg-grey-1 q-mb-sm"
          @click="$emit('fechar')" />
        <div class="text-weight-bold">João da Silva</div>
        <div>joao@gmail.com</div>
      </div>
    </q-img>
    <q-list style="margin-top: 160px">
      <menu-item v-for="link in listaMenu" :key="link.title" v-bind="link" />
    </q-list>
  </div>
</template>

<script>
  import menuItem from 'components/menu-item.vue'

  export default {
    name: 'menu-usuario',

    components: {
      menuItem
    },

    computed: {
      listaMenu() {
        return [
          {
            title: 'trocar senha',
            icon: 'password',
            link: { name: 'home' }
          },
          {
            title: 'sair',
            icon: 'logout',
            link: { name: 'login' }
          }
        ]
      }
    }
  }
</script>