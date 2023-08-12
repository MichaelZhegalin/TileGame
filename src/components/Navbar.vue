<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #2192EC; height: 8vh;">
        <div class="container-fluid">
            <v-btn @click="$router.push('/')" size="large" color="green" style="font-size: 24px; font-weight: 600;" class="navbar-brand">Плитки</v-btn>
            <div id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <v-btn @click="goToRecord" size="large" color="orange" class="nav-link active">Список лидеров</v-btn>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        goToRecord(){
            this.$router.push('/recordUsers');
            this.$store.commit('clearTilesAndActiveId');
            this.$store.commit('setNewGame');
            this.$store.commit('setDefault');
            console.log( this.$store.state.userInfo.hardLvl)
           
        }
    }

}
</script>

<style>

</style>