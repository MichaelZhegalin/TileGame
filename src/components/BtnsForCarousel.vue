<template>
    <div class="container">
        <div class="row btns__row">
            <div class="col btns__col-start" style="display: flex; justify-content: flex-start">
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
    </div>
</template>

<script>
export default {

    props: {
        carouselCounter: Number,
    },

    methods: {
        rigthSlide(){
            this.$emit('rigthSlide');
        },
        leftSlide(){
            this.$emit('leftSlide');
        }
    }

}
</script>

<style scoped>

.btns__row{
    display: flex; 
    justify-content: space-between;
}

.btns__col-start{
    display: flex; 
    justify-content: flex-start
}

.btns__col-end{
    display: flex; 
    justify-content: flex-end
}

</style>