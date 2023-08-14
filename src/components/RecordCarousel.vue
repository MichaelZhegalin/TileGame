<template>
    <div style="width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="carousel">
            <div class="container" style=" margin-bottom: 35px;">
                <div class="row">
                <transition-group name="record-list">
                    <div class="col record-list-item" :key="item.id" v-for="item in $store.state.record.recordListShow">
                        <v-card>
                            <ul>
                                <li>Имя: {{ item.name }}</li>
                                <li>Сложность: {{ item.hardLvl }}</li>
                                <li>Скорость: {{ item.speedLvl }}</li>
                                <li>Счет: {{ item.score }}</li>
                            </ul>
                        </v-card>
                    </div>
                </transition-group>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row" style="display: flex; justify-content: space-between;">
                <div class="col" style="display: flex; justify-content: flex-start">
                    <v-btn @click="leftSlide" v-if="carouselCounter > 0">Влево</v-btn>
                </div>
                <div class="col" style="display: flex; justify-content: flex-end">
                    <v-btn @click="rigthSlide" v-if="$store.state.record.usersRecord.length - carouselCounter*3 > 3">Вправо</v-btn>
                </div>           
            </div>
        </div>
    </div>
    
  </template>

<script>
export default {

    data() {
        return {
            carouselCounter: 0,
        }
    },

    methods: {
        rigthSlide(){
            this.carouselCounter += 1;
            this.$store.commit('setRecordListShow', this.carouselCounter);
        },
        leftSlide(){
            this.carouselCounter -= 1;
            this.$store.commit('setRecordListShow', this.carouselCounter);
        }
    }

}
</script>

<style scoped>
.record-list-item {
  transition: all 0.5s ease;
  display: flex; 
  justify-content: center; 
  margin: 10px;
}

.record-list-enter-from,
.record-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.record-list-leave-active {
  position: absolute;
}
</style>