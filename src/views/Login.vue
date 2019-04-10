<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm3 class="ma-2">
      <v-card class="card-login" dark>
        <v-toolbar>
          <v-toolbar-title>Faça seu Login!</v-toolbar-title>
        </v-toolbar>
        <form class="pa-3" >
          <v-text-field label="E-mail"></v-text-field>
          <v-text-field label="Senha"></v-text-field>
        </form>
        <v-card-actions>
          <v-btn color="info" block round>Logar</v-btn>
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
  .card-login{
    background-color: rgba (0, 0, 0, 0.8);
      }
</style>
