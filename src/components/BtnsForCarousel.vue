<template>
    <div class="container">
        <div class="row btns__row">
            <div class="col btns__col-start">
                <transition name="slide-fade-left">
                    <v-btn size="x-large" icon @click="leftSlide" v-if="carouselCounter > 0">
                        <v-img :width="60" src="../img/leftArrow.png" cover></v-img>
                    </v-btn>
                </transition>
            </div>
            <div class="col btns__col-end">
                <transition name="slide-fade-rigth">
                    <v-btn size="x-large" icon @click="rigthSlide" v-if="$store.state.record.usersRecord.length - carouselCounter*3 > 3">
                        <v-img  :width="60" src="../img/rigthArrow.png" cover></v-img>
                    </v-btn>
                </transition>
            </div>           
        </div>
        <div class="row">
            <div class="col btns__col-center">
                <transition name="fade">
                    <v-btn color="danger" size="large" @click="() => showModal = true" v-if="$store.state.record.recordListShow.length !== 0">Отчистить таблицу рекордов</v-btn>
                </transition>
            </div>
        </div>
    </div>
    <modal-clear-record 
        :showModal="showModal"
        @changedMyMind='changedMyMind'
        @clearRecord="clearRecord"></modal-clear-record>
</template>

<script>
import ModalClearRecord from "./ModalClearRecord.vue";

export default {

    data(){
        return{
            showModal: false,
            carouselCounter: 0
        }
    },
    components: { ModalClearRecord },

    methods: {
        rigthSlide(){
            this.carouselCounter += 1;
            this.$store.commit('setRecordListShow', this.carouselCounter);
        },
        leftSlide(){
            this.carouselCounter -= 1;
            this.$store.commit('setRecordListShow', this.carouselCounter);
        },
        clearRecord(){
            this.$store.commit('clearRecord');
            this.showModal = false;
        },
        changedMyMind(){
            this.showModal = false;
        }
    }

}
</script>

<style scoped>

.btns__row{
    display: flex; 
    justify-content: space-between;
    margin-bottom: 15px;
}

.btns__col-start{
    display: flex; 
    justify-content: flex-start
}

.btns__col-center{
    display: flex; 
    justify-content: center
}

.btns__col-end{
    display: flex; 
    justify-content: flex-end
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