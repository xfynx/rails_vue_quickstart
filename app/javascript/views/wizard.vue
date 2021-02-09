<template>
  <div>
    <div class="columns">
      <div v-if="step_info.current === 1">
        <div class="column is-one-fifth">
          <label>
            <input type="text" v-model="field1" name="field1" placeholder="поле 1">
          </label>
        </div>
      </div>
      <div v-if="step_info.current === 2">
        <div class="column is-one-fifth">
          <label>
            <input type="text" v-model="field2" name="field2" placeholder="поле 2">
          </label>
          <label>
            <input type="text" v-model="field3" name="field3" placeholder="поле 3">
          </label>
        </div>
      </div>
      <div v-if="step_info.current === 3">
        <div class="column is-one-fifth">
          Результат:
          <p>{{field1}}</p>
          <p>{{field2}}</p>
          <p>{{field3}}</p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-fifth">
        <p>Шаг: {{ this.step_info.current }}</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-fifth">
        <button class="button is-info" v-if="step_info.current > step_info.min" @click="back">Назад</button>
        <button class="button is-success" v-if="step_info.current < step_info.max" @click="next">Вперёд</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wizard',
  data() {
    return {
      step_info: {max: 3, min: 1, current: 1},
      field1: '',
      field2: '',
      field3: '',
    }
  },
  methods: {
    next() {
      this.step_info.current += 1
    },
    back() {
      this.step_info.current -= 1
    },
  }
}
</script>