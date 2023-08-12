<template>
    <div style="max-width: 27vw; text-align: center;">
        <div class="card text-white bg-danger mb-3" style="max-width: 12rem; min-width: 10rem;">
            <h3 class="card-header" style="text-align: center;">Уровень сложности</h3>
            <div class="card-body setting">
                <v-btn color="green" icon @click="plusHardLvl"><v-img width="35" src="../img/plus2.png"></v-img></v-btn>
                <h2>{{$store.state.setting.hardLvl}}</h2>
                <v-btn color="red" icon @click="minusHardLvl"><v-img width="35" src="../img/minus2.png"></v-img></v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        plusHardLvl(){
            this.$emit('plusHardLvl')
        },
        minusHardLvl(){
            this.$emit('minusHardLvl')
        }
    }
}
</script>

<style scoped>

.setting{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>