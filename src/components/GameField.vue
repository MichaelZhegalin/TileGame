<template>
  <div class="container" style="max-height: 25rem; max-width: 25rem;">
    <div :class="[`row row-cols-${tilesNum}`]">
      <div class="col"  v-for="tile in $store.state.tilesInfo.tiles" :key="tile.id">
        <single-tile @click="() => clickOnTile(tile.id)" :class="[tile.color !== '#FFFFFF' ? `otherColor` : `mainColor`]"></single-tile>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTile from "@/components/SingleTile.vue";
export default {

    components: {SingleTile},

    props: {
      tilesNum: Number,
    },
    methods: {
        clickOnTile(tileId){
            this.$emit('clickOnTile', tileId, this.tilesNum);
        }
    }

}
</script>

<style scoped>
.otherColor{
  transition: ease-in 400ms;
  background-color: red;
}

.mainColor{
  transition: ease-in 400ms;
  background-color: '#FFFFFF';
}
</style>