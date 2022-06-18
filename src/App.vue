<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Checkbox label="Male" />
  <Checkbox label="Female" />
  <Checkbox label="Other" />
</template>

<script>
import CheckBox from './components/CheckBox.vue'

export default {
  name: 'App',
  components: {
    Checkbox: CheckBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
