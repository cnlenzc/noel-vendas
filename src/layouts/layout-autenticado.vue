<template>
  <q-layout view="lhr LpR lfr">
    <q-header elevated>
      <q-toolbar>
        <q-btn v-if="!menuVisivel" flat round dense icon="menu" @click="menuVisivel = !menuVisivel" />
        <q-toolbar-title>
          noel vendas
        </q-toolbar-title>
        <q-btn flat round dense icon="person" @click="usuarioVisivel = !usuarioVisivel" />
      </q-toolbar>
    </q-header>
    <q-drawer v-if="menuVisivel" v-model="menuVisivel" show-if-above bordered content-class="bg-grey-1">
      <menu-app @fechar="menuVisivel=false"></menu-app>
    </q-drawer>
    <q-drawer v-if="usuarioVisivel" v-model="usuarioVisivel" side="right" show-if-above bordered content-class="bg-grey-1">
      <menu-usuario @fechar="usuarioVisivel=false"></menu-usuario>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import menuApp from 'components/menu-app.vue'
  import menuUsuario from 'components/menu-usuario.vue'

  export default {
    name: 'layout',

    components: {
      menuApp,
      menuUsuario
    },

    data() {
      return {
        menuVisivel: false,
        usuarioVisivel: false
      }
    },

    created() {
      console.log('this.usuarioVisivel', this.usuarioVisivel)
      this.usuarioVisivel = false
    },

    mounted() {
      console.log('this.usuarioVisivel', this.usuarioVisivel)
      this.usuarioVisivel = false
    }
  }
</script>