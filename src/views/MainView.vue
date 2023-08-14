<template>
    <div class="container-fluid" style="margin-top: 40px;">

        <div class="row" style="display: flex; gap: 20px;">

            <div v-if="blinkungTile" class="disableField"></div>

            <div class="col">
                <game-setting 
                  :gameStart="gameStart"
                  @plusHardLvl="plusHardLvl"
                  @minusHardLvl="minusHardLvl"
                  @plusGameSpeed="plusGameSpeed"
                  @minusGameSpeed="minusGameSpeed"></game-setting>
            </div>

            <div class="col" style="display: flex; justify-content: center;">
                <main-part-game 
                  :gameStart="gameStart" 
                  :tilesNum="tilesNum" 
                  @clickOnTile="clickOnTile" 
                  @startGame="startGame" 
                  @readyToPlay="readyToPlay"></main-part-game>
            </div>

            <div class="col">
                <transition name="slide-fade-right">
                  <game-info v-if="gameStart"></game-info>
                </transition>
            </div>

        </div>

    </div>
    
    <modal-save-record :gameOver="gameOver" @newGame="newGame" @saveAndNewGame="saveAndNewGame"></modal-save-record>

</template>

<script>
import {useBlinkingTiles} from "@/hooks/useBlinkingTiles";
import {useClickTile} from "@/hooks/useClickTile";

import { ref } from 'vue';
import { useStore } from "vuex";

import GameInfo from "@/components/GameInfo.vue";
import GameSetting from "@/components/GameSetting.vue";
import MainPartGame from "@/components/MainPartGame.vue";
import ModalSaveRecord from "@/components/ModalSaveRecord.vue";

export default ({
  components: {GameInfo, GameSetting, MainPartGame, ModalSaveRecord},
  data(){
    return {
      tilesNum: 3,
      gameStart: false,
      hardLvl: this.$store.state.setting.hardLvl,
      speedLvl: this.$store.state.setting.speedLvl,
    }
  },
  methods: {
    saveAndNewGame(userName){
      this.$store.commit('setUserRecord', {name: userName, hard: this.hardLvl, speed: this.speedLvl, score: this.$store.state.userInfo.score})
      this.gameStart = false
      this.$store.commit('setNewGame');
      this.$store.commit('setDefault');
      this.hardLvl = this.$store.state.setting.hardLvl;
      this.speedLvl = this.$store.state.setting.speedLvl;
      this.tilesNum = 3;
      this.gameOver = false;
    },
    newGame(){
      this.gameStart = false
      this.$store.commit('setNewGame');
      this.$store.commit('setDefault');
      this.hardLvl = this.$store.state.setting.hardLvl;
      this.speedLvl = this.$store.state.setting.speedLvl;
      this.tilesNum = 3;
      this.gameOver = false;
    },
    readyToPlay(){
      this.gameStart = true;
      this.$store.commit('setField', this.tilesNum**2);
    },
    startGame(){
      this.$store.commit('setField', this.tilesNum**2);
      this.setTileActivationQueue();
    },
    plusHardLvl(){
      if(this.tilesNum < 4){
        this.$store.commit('setNewGame');
        this.$store.commit('setDefault');
        this.tilesNum += 1;
        if(this.gameStart){
          this.$store.commit('setField', this.tilesNum**2);
        }
        this.$store.commit('setHardLvl', this.hardLvl + 1);
        this.hardLvl = this.$store.state.setting.hardLvl;
        this.$store.commit('setSpeedLvl', this.speedLvl);
      }else{
        alert("Вы уже достигли максимального уровня сложности!");
      } 
    },
    minusHardLvl(){
      if(this.tilesNum > 2){
        this.$store.commit('setNewGame');
        this.$store.commit('setDefault');
        this.tilesNum -= 1;
        if(this.gameStart){
          this.$store.commit('setField', this.tilesNum**2);
        }
        this.$store.commit('setHardLvl', this.hardLvl - 1);
        this.hardLvl = this.$store.state.setting.hardLvl;
        this.$store.commit('setSpeedLvl', this.speedLvl);
      }else{
        alert("Вы уже достигли минимального уровня сложности!");
      }
    },
    plusGameSpeed(){
      if(this.speedLvl < 2){
        this.$store.commit('setNewGame');
        this.$store.commit('setDefault');
        this.$store.commit('setSpeedLvl', this.speedLvl + 1);
        this.speedLvl = this.$store.state.setting.speedLvl;
        this.$store.commit('setHardLvl', this.hardLvl);
      }else{
        alert("Вы уже достигли максимальной скорости игры!");
      }
    },
    minusGameSpeed(){
      if(this.speedLvl > 0){
        this.$store.commit('setNewGame');
        this.$store.commit('setDefault');
        this.$store.commit('setSpeedLvl', this.speedLvl - 1);
        this.speedLvl = this.$store.state.setting.speedLvl;
        this.$store.commit('setHardLvl', this.hardLvl);
      }else{
        alert("Вы уже достигли минимальной скорости игры!");
      }
    }
  },
  setup(props){
    const store = useStore();
    let nextLvlFlag = ref(false);
    let gameOver = ref(false);
    let blinkungTile = ref(false);
    const setTileActivationQueue = () => {
      store.commit('setHardLvl', store.state.setting.hardLvl);
      store.commit('setSpeedLvl', store.state.setting.speedLvl);
      useBlinkingTiles(store.state.userInfo.lvl, store.state.setting.hardLvl, store)
      targetActiveTile(store.state.tilesInfo.activeId)
    }

    const clickOnTile = (tileId, tilesNum) =>{
      nextLvlFlag.value = useClickTile(tileId, tilesNum, store);
      if(nextLvlFlag.value && !store.state.tilesInfo.gameOver){
        setTileActivationQueue();
        nextLvlFlag.value = false;
      }else if(store.state.tilesInfo.gameOver){
        gameOver.value = true;
      }
    }

    async function targetActiveTile(tileActivationQueue){
      blinkungTile.value = true;
      for(let i = 0; i < tileActivationQueue.length; i++){
        await new Promise((resolve) => {
          setTimeout(
            () => resolve(store.commit('setColorTile', {id: tileActivationQueue[i], color: 'red'})), 1000/(store.state.setting.speedLvl + 1))
        })
        await new Promise((resolve) => {
          setTimeout(
            () => resolve(store.commit('setColorTile', {id: tileActivationQueue[i], color: '#FFFFFF'})), 1000/(store.state.setting.speedLvl + 1))
        })
      }
      blinkungTile.value = false;
    }

    return {
      setTileActivationQueue, clickOnTile, blinkungTile, gameOver
    }
  }
});
</script>

<style scoped>

.disableField{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.slide-fade-right-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-right-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

</style>