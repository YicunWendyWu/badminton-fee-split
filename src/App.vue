<template lang="pug">
.app#app
  p
    div Court fee per hour
    input(v-model.number="courtFee" type="number")
  p
    div Court hours
    input(v-model.number="courtHours" type="number")
  p
    div Member fee per person
    input(v-model.number="memberFee" type="number")
  p
    div Tax rate
    input(v-model.number="taxRate" type="number" step="0.01")
  p
    div Number of people
    input(v-model.number="people" type="number")
  p
    div Total
    div {{ total }}
  p
    div Each person pays
    div {{ totalSplit }}
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      courtFee: 18,
      courtHours: 1,
      memberFee: 3,
      taxRate: 0.13,
      people: 2
    }
  },
  computed: {
    total: function () {
      this.$ga.event('Calculations', 'Fee', 'fee')
      return ((this.courtFee * this.courtHours + this.memberFee * this.people) * (this.taxRate + 1)).toFixed(2)
    },
    totalSplit: function () {
      return Math.ceil(this.total / this.people)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
