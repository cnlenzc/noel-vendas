<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 10vh">
        oops!
      </div>

      <div class="text-h2" style="opacity:.8">
        caminho não encontado neste app...
      </div>

      <q-btn class="q-mt-xl" color="white" text-color="blue" unelevated to="/" label="home" no-caps />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'error-404'
  }
</script>