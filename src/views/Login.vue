<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm3 class="ma-2">
      <v-card class="card-login pb-3" width="400" color="cinza escurecer-3">
        <v-toolbar id="facalogin">
          <v-toolbar-title id="escritafacaseulogin">Faça seu Login!</v-toolbar-title>
        </v-toolbar>
        <form class="pa-3" >
          <v-text-field label="E-mail" outline></v-text-field>
          <v-text-field label="Senha" outline></v-text-field>
        </form>
        <v-card-actions>
          <v-btn id="pedro" block round>Logar</v-btn>
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
#pedro{
  background-color:  #00C853;
  color: black;
  font-weight: bold;
  font-family: arial;
  font-size: 100%;
}
  #facalogin{
    background-color:  #00C853;

  }
  #escritafacaseulogin{
    color: #000000;
  }



</style>
