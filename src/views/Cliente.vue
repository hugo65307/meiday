<template>
<div>
  <h1>fasdfasdfasdf</h1>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg4 pa-2>
      <v-text-field v-model="password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            label="Senha"></v-text-field>
    </v-flex>
    <v-flex xs12 sm6 md4 lg4 pa-2>
      <v-text-field label="Sobrenome"></v-text-field>
    </v-flex>
    <v-flex xs12 sm6 md4 lg4 pa-2>
      <v-text-field label="E-mail"></v-text-field>
    </v-flex>
    <v-flex xs12 sm6 md4 lg4 pa-2>
      <v-text-field label="Telefone"></v-text-field>
    </v-flex>
    <v-flex xs12 sm6 md4 lg4 pa-2>
      <v-text-field label="Senha"></v-text-field>
    </v-flex>
    <v-flex xs12 sm6 md4 lg4 pa-2>
      <v-text-field label="Repita Senha"></v-text-field>
    </v-flex>
    
  </v-layout>
</div>
</template>
<script>
export default {
  data(){
    return{
      show1: false
    }
  }
}
</script>
<style>

</style>
