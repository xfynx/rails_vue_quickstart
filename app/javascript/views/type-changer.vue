<template>
  <div>
    <div class="columns">
      <div class="column is-one-fifth">
        <button class="button" v-model="type" @click="type = 'counters'">Счётчики</button>
      </div>
      <div class="column is-one-fifth">
        <button class="button" v-model="type" @click="type = 'exports'">Выгрузки</button>
      </div>
      <div class="column is-one-fifth">
        <button class="button" v-model="type" @click="type = null">Сброс</button>
      </div>
    </div>
    <p v-if="type === 'hello'">Привет! Нажмите что-нибудь 👽</p>
    <p v-if="type === 'counters'">Тут счётчики</p>
    <p v-if="type === 'exports'">Тут выгрузки</p>
    <p v-if="type === null">Выберите</p>
  </div>
</template>

<script>
export default {
  name: 'TypeChanger',
  data() {
    return {
      type: 'hello'
    }
  }
}
</script>