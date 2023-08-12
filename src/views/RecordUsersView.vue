<template>
    <div v-for="userRecord in $store.state.record.usersRecord" :key="userRecord.id">
        <ul>
            <li>Имя: {{ userRecord.name }}</li>
            <li>Сложность: {{ userRecord.hardLvl }}</li>
            <li>Скорость: {{ userRecord.speedLvl }}</li>
            <li>Счет: {{ userRecord.score }}</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>