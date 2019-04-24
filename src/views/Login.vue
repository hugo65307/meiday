<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm3 class="ma-2">
      <v-card class="card-login" dark color="light-blue accent-3">
        <v-toolbar color="cyan accent-2">
          <v-toolbar-title>Faça seu Login!</v-toolbar-title>
        </v-toolbar>
        <form class="pa-3" >
          <v-text-field label="E-mail"></v-text-field>
          <v-text-field label="Senha"></v-text-field>
        </form>
        <v-card-actions>
          <v-btn id="pedro" color="green lighten-5" block round>Logar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 
</script>
<style scoped>
#pedro{
  color: black;
  font-weight: bold;
  font-family: GungsuhChe;
  font-size: 150%;
}
  .layout{
    background-image: url('../assets/fundo.jpg');
    background-size: cover;
    background-position: center;
  }
  .card-login{
    width: 600px;
    right: 100px;
  }
</style>
