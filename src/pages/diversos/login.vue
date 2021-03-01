<template>
  <q-page>
    <div class="img-back flex flex-center">
      <div class="row bg-white q-pa-lg" style="max-width: 400px">
        <q-form @submit="tryLoading(entrar)">
          <div class="row items-baseline q-gutter-sm">
            <div class="u-titulo">entrar</div>
            <q-input v-model="usuario" label="usuario" class="col-12" outlined autofocus
              :rules="[ $rules.obrigatorio ]" />
            <q-input v-model="senha" label="senha" class="col-12" :type="isPwd ? 'password' : 'text'" outlined
              :rules="[ $rules.obrigatorio ]">
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPwd = !isPwd" />
              </template>
            </q-input>
            <div class="u-link q-py-md">esqueceu a senha?</div>
            <q-btn label="entrar" type="submit" size="lg" color="primary" class="col-12" no-caps />
          </div>
        </q-form>
      </div>
    </div>
    <a href="https://pt.vecteezy.com/vetor-gratis/fundo-tecnologia">Fundo Tecnologia Vetores por Vecteezy</a>
  </q-page>
</template>

<script>
  export default {
    name: 'login',

    data() {
      return {
        usuario: '',
        senha: '',
        isPwd: true
      }
    },

    methods: {
      entrar() {
        this.$router.push({ name: 'home' })
      }
    }
  }
</script>