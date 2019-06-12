<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm3 class="ma-2">
      <v-card class="card-login" dark color="blue-grey darken-4">
        <v-toolbar color="blue-grey darken-3">
        <v-toolbar-title>Faça seu Login!</v-toolbar-title>
        </v-toolbar>
        <form class="pa-3" >
          <v-text-field label="E-mail"></v-text-field>
          <v-text-field label="Senha"></v-text-field>
        </form>
        <v-card-actions>
          <v-btn id="pedro" color="green lighten-5" block round>logar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 
</script>
<style scoped>
#pedro{
  color: rgb(3, 3, 3);
  font-weight: bold;
  font-family: Times New Roman;
  font-size: 150%;
}
  .layout{
    background-image: url('../assets/fundo.jpg');
    background-size: cover;
    background-position: center;
  }
  .card-login{
    width: 400px;
    right: 100px;
  }
</style>
