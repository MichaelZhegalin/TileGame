<template>
    <v-dialog persistent v-model="show" transition="dialog-top-transition" width="auto">
          <v-card>
            <v-toolbar color="danger" title="Вы проиграли :("></v-toolbar>
            <v-card-text>
              <p>Сохраните свой результат для потомков!</p>
              <v-text-field v-model="userName" label="Имя игрока"></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn color="red" @click="newGame">Закрыть</v-btn>
              <v-btn color="green" @click="saveAndNewGame">Сохранить</v-btn>
            </v-card-actions>
          </v-card>
    </v-dialog>
</template>

<script>
export default {

    props: {
        gameOver: Boolean,
    },

    data(){
        return{
            userName: '',
        }
    },

    computed: {
        show: {
            get(){
                return this.gameOver;
            }
        }
    },

    methods: {
        newGame(){
            this.$emit('newGame');
            this.userName = '';
        },
        saveAndNewGame(){
            this.$emit('saveAndNewGame', this.userName);
            this.userName = '';
        } 
    }

}
</script>

<style>

</style>