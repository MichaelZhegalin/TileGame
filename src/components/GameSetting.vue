<template>
    <div>
        <transition name="slide-fade-left">
            <div v-if="gameStart" class="container" style="display: flex; flex-direction: column; gap: 15px;">
                <div class="row">
                    <div class="col">
                        <hard-lvl-setting @plusHardLvl="plusHardLvl" @minusHardLvl="minusHardLvl"></hard-lvl-setting>
                    </div>
                    <div class="col">
                        <speed-lvl-setting @plusSpeedLvl="plusGameSpeed" @minusSpeedLvl="minusGameSpeed"></speed-lvl-setting>
                    </div>
                </div>
            </div>
        </transition>
    </div>
    
  </template>
  
  <script>
  import HardLvlSetting from './HardLvlSetting.vue';
  import SpeedLvlSetting from './SpeedLvlSetting.vue';
  export default {
    props: {
        gameStart: Boolean,
    },
    components: {HardLvlSetting, SpeedLvlSetting},
    methods: {
        plusHardLvl(){
            this.$emit('plusHardLvl');
        },
        minusHardLvl(){
            this.$emit('minusHardLvl');
        },
        plusGameSpeed(){
            this.$emit('plusGameSpeed');
        },
        minusGameSpeed(){
            this.$emit('minusGameSpeed');
        },
    }
  
  }
  </script>
  
  <style>
  .slide-fade-left-enter-active {
    transition: all 0.5s ease-out;
  }
  .slide-fade-left-enter-from {
    transform: translateX(-20px);
    opacity: 0;
  }
  </style>