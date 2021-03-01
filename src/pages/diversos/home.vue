<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm img-back">
      <q-btn no-caps style="height: 100px; width: 100px;" color="primary" stack label="clientes" icon="people"
        :to="{ name: 'contato-list' }" />
      <q-btn no-caps style="height: 100px; width: 100px;" color="primary" stack label="vendas" icon="shopping_cart"
        :to="{ name: 'venda-edit' }" />
      <q-btn no-caps style="height: 100px; width: 100px;" color="primary" stack label="produtos" icon="card_giftcard"
        :to="{ name: 'produto-list' }" />
    </div>
    <a href="https://pt.vecteezy.com/vetor-gratis/fundo-tecnologia">Fundo Tecnologia Vetores por Vecteezy</a>
  </q-page>
</template>

<script>
  export default {
    name: 'home'
  }
</script>
