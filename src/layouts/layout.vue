<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-toolbar-title>
          noel vendas
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <menuApp></menuApp>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import menuApp from 'components/menuApp.vue'

  export default {
    name: 'layout',

    components: {
      menuApp
    },

    data() {
      return {
        leftDrawerOpen: true
      }
    }
  }
</script>