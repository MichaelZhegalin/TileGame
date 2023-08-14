<template>
    <v-dialog persistent v-model="show" transition="dialog-top-transition" width="auto">
        <v-card>
            <v-toolbar color="warning" title="Вы уверены?"></v-toolbar>
            <v-card-title>Все данные о рекордах будут утерянны!</v-card-title>
            <v-card-actions class="justify-end">
                <v-btn color="green" @click="changedMyMind">Я Передумал!</v-btn>
                <v-btn color="red" @click="clearRecord">Я Уверен!</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {

    props: {
        showModal: Boolean,
    },

    computed: {
        show: {
            get(){
                return this.showModal;
            }
        }
    },

    methods: {
        clearRecord(){
            this.$emit('clearRecord');
        },
        changedMyMind(){
            this.$emit('changedMyMind')
        }
    }

}
</script>

<style>

</style>