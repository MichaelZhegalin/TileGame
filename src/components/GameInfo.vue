<template>
    <div class="container" style="display: flex; flex-direction: column; align-items: end;">
        <div class="row">
            <div class="col" style="display: flex; justify-content: center;">
                <div class="card text-white bg-success mb-3" style="width: 10rem;">
                    <h3 class="card-header" style="text-align: center;">Уровень</h3>
                    <div class="card-body" style="text-align: center;">
                        <h3 class="card-title">{{ $store.state.userInfo.lvl }}</h3>
                    </div>
                </div>
            </div>
            <div class="col" style="display: flex; justify-content: center;">
                <div class="card text-white bg-warning mb-3" style="width: 10rem;">
                    <h3 class="card-header" style="text-align: center;">Счет</h3>
                    <div class="card-body" style="text-align: center;">
                        <h3 class="card-title">{{ $store.state.userInfo.score }}</h3>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>