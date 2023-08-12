<template>
    <div>
        <transition name="fade" mode="out-in">
            <div  v-if="gameStart" class="container mainGameContainer">
                <div class="row">
                    <game-field @clickOnTile="clickOnTile" :tilesNum="tilesNum"></game-field>
                </div>
                <div class="row">
                    <v-btn class="btns" size="large" color="green" @click="startGame">Начать игру</v-btn>
                </div>
            </div>
            <v-btn class="btns" size="large" color="green"  v-else @click="readyToPlay">Поехали!</v-btn>
        </transition>
    </div>
</template>

<script>

import GameField from './GameField.vue'

export default {
    components: {GameField},
    props: {
        gameStart: Boolean,
        tilesNum: Number,
    },
    methods: {
        clickOnTile(tileId, tilesNum){
            this.$emit('clickOnTile', tileId, tilesNum)
        },
        startGame(){
            this.$emit('startGame')
        },
        readyToPlay(){
            this.$emit('readyToPlay')
        },
    }

}
</script>

<style scoped>
.btns{
    font-size: 20px;
    font-weight: 600;
}

.mainGameContainer{
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    min-width: 300px; 
    gap: 60px;
}

.fade-enter-active{
  transition: opacity 0.5s ease;
}

.fade-enter-from{
  opacity: 0;
}
.fade-leave-active {
  transition: 0;
}
.fade-leave-to {
  opacity: 0;
}

</style>