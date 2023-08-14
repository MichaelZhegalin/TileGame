<template>
    <div style="width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="carousel">
            <div class="container" style=" margin-bottom: 35px;">
                <div class="row" v-if="$store.state.record.recordListShow.length !== 0">
                    <transition-group name="record-list">
                        <div class="col record-list-item" :key="item.id" v-for="item in $store.state.record.recordListShow">
                            <card-record :item="item"></card-record>
                        </div>
                    </transition-group>
                </div>
                <div v-else style="display: flex; justify-content: center;">
                    <v-card style="max-width: 20rem;">
                        <v-card-title style="text-align: center;">Пока нет рекордов :(</v-card-title>
                    </v-card>
                </div>
            </div>
        </div>
        <btns-for-carousel></btns-for-carousel>
    </div>
    
  </template>

<script>
import CardRecord from './CardRecord.vue';
import BtnsForCarousel from './BtnsForCarousel.vue';
export default {
  components: { CardRecord, BtnsForCarousel },

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

.slide-fade-left-enter-active {
    transition: all 0.5s ease-out;
}
.slide-fade-left-enter-from {
    transform: translateX(-40px);
    opacity: 0;
}

.slide-fade-rigth-enter-active {
    transition: all 0.5s ease-out;
}
.slide-fade-rigth-enter-from {
    transform: translateX(40px);
    opacity: 0;
}
</style>