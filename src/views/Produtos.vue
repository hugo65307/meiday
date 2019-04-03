<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Meus Clientes</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">Novo Cliente</v-btn>
        </template>
        <v-card>
          <v-toolbar color="blue darken-4">
          <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
        </v-toolbar>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md6>
                  <v-text-field v-model="editedItem.nome" label="Nome"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field v-model="editedItem.sobrenome" label="Sobrenome"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.logradouro" label="Logradouro"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.nome }}</td>
        <td class="text-xs-center">{{ props.item.sobrenome }}</td>
        <td class="text-xs-center">{{ props.item.logradouro }}</td>
        <td class="text-xs-center">{{ props.item.carbs }}</td>
        <td class="text-xs-center">{{ props.item.protein }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Nome',
          align: 'center',
          sortable: false,
          value: 'nome'
        },
        { text: 'Sobrenome', value: 'sobrenome', align: 'center' },
        { text: 'Logradouro', value: 'logradouro' , align: 'center'},
        { text: 'Carbs (g)', value: 'carbs' , align: 'center'},
        { text: 'Protein (g)', value: 'protein' , align: 'center'},
        { text: 'Actions', value: 'nome', sortable: false , align: 'center' }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        nome: '',
        sobrenome: 0,
        logradouro: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        nome: '',
        sobrenome: 0,
        logradouro: 0,
        carbs: 0,
        protein: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo Cliente' : 'Editar Cliente'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            nome: 'Marcelo Figueiredo Terenciani',
            sobrenome: 159,
            logradouro: 6.0,
            carbs: 24,
            protein: 4.0
          },
          {
            nome: 'Ice cream sandwich',
            sobrenome: 237,
            logradouro: 9.0,
            carbs: 37,
            protein: 4.3
          },
          {
            nome: 'Eclair',
            sobrenome: 262,
            logradouro: 16.0,
            carbs: 23,
            protein: 6.0
          },
          {
            nome: 'Cupcake',
            sobrenome: 305,
            logradouro: 3.7,
            carbs: 67,
            protein: 4.3
          },
          {
            nome: 'Gingerbread',
            sobrenome: 356,
            logradouro: 16.0,
            carbs: 49,
            protein: 3.9
          },
          {
            nome: 'Jelly bean',
            sobrenome: 375,
            logradouro: 0.0,
            carbs: 94,
            protein: 0.0
          },
          {
            nome: 'Lollipop',
            sobrenome: 392,
            logradouro: 0.2,
            carbs: 98,
            protein: 0
          },
          {
            nome: 'Honeycomb',
            sobrenome: 408,
            logradouro: 3.2,
            carbs: 87,
            protein: 6.5
          },
          {
            nome: 'Donut',
            sobrenome: 452,
            logradouro: 25.0,
            carbs: 51,
            protein: 4.9
          },
          {
            nome: 'KitKat',
            sobrenome: 518,
            logradouro: 26.0,
            carbs: 65,
            protein: 7
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>