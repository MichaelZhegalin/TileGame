<template>
    <v-card class="card">
        <div class="card__hidden"></div>
        <div>
            <v-card-title>
                <h1 class="card__header-center">{{ item.name }}</h1>
            </v-card-title>

            <div class="row">
                <div class="col card__col-position">
                    <v-card-subtitle>
                        <h5>Сложность: {{ item.hardLvl }}</h5>
                    </v-card-subtitle>
                </div>
                <div class="col card__col-position">
                    <v-card-subtitle>
                        <h5>Скорость: {{ item.speedLvl }}</h5>
                    </v-card-subtitle>
                </div>
            </div>
        </div>
        

        <v-card-text class="card__text-position">
            <h2 style="align-self: flex-end;">Счет: {{ item.score }}</h2>
        </v-card-text>
    </v-card>
</template>

<script>
export default {

    props: {
        item: Object,
    }

}
</script>

<style scoped>

.card{
    transition: 250ms ease;
    position: relative; 
    height: 40vh; 
    width: 24vw;
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    background: url('../img/cup2.png') no-repeat;
    background-size: cover;
    background-color: white
}

.card:hover{
    transition: 250ms ease;
    width: 25vw;
}

.card__hidden{
    position: absolute; 
    height: 100%; 
    width: 100%; 
    z-index: 2;
}

.card__col-position{
    display: flex; 
    justify-content: center;
}

.card__text-position{
    display: flex; 
    justify-content: center;
}

.card__header-center{
    text-align: center;
}

</style>