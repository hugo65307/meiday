<template>
<div>
  <v-app v-if="usuarioLogado">
    <v-toolbar color="grey darken-2" dark>
      <v-toolbar-side-icon @click="mostra = true"></v-toolbar-side-icon>
      <v-toolbar-title>MeiDay</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer temporary absolute 
      v-model="mostra">
      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.rota"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
  <v-app v-else>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</div>
</template>

<script>
  import Login from './views/Login'

  export default {
    name: 'App',
    components: {
      Login
    },
    data () {
      return {
        usuarioLogado: true,
        items: [
          { title: 'Home', icon: 'dashboard', rota:'/home' },
          { title: 'Clientes', icon: 'person', rota: '/cliente' }
        ],
        right: null,
        mostra: false
      }
    }
  }
</script>