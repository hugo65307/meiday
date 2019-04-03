<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm3 class="ma-2">
      <v-card color="deep-orange accent-3" >
        <v-toolbar color="deep-orange darken-1">
          <v-toolbar-title>Faça seu Login!</v-toolbar-title>
        </v-toolbar>
        <form class="pa-3" >
          <v-text-field label="E-mail"></v-text-field>
          <v-text-field label="Senha"></v-text-field>
        </form>
        <v-card-actions>
          <v-btn  block round outline  color="black">Logar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 
</script>
<style scoped>
  .layout{
    background-image: url('../assets/fundo.jpg');
    background-size: cover;
    background-position: center;
  }
</style>
