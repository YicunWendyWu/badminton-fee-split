<template lang="pug">
.app#app
  div
    div Court fee per hour
    input(v-model.number="courtFee" type="number")
  div
    div Total court hours
    input(v-model.number="courtHours" type="number")
  div
    div Member fee per person
    input(v-model.number="memberFee" type="number")
  div
    div Tax rate
    input(v-model.number="taxRate" type="number" step="0.01")
  div
    div Number of non-members
    input(v-model.number="peopleNonMembers" type="number")
  div
    div Number of members
    input(v-model.number="peopleMembers" type="number")
  div
    div Total
    div {{ total }}
  div(v-if="peopleNonMembers > 0")
    div Each non-member pays
    div {{ nonMemberSplit }}
  div(v-if="peopleMembers > 0")
    div Each member pays
    div {{ memberSplit }}
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
      peopleNonMembers: 2,
      peopleMembers: 0
    }
  },
  computed: {
    people: function () {
      return this.peopleNonMembers + this.peopleMembers
    },
    courtTotal: function () {
      var fee = (this.courtFee * this.courtHours) * (this.taxRate + 1)
      this.$ga.event('Calculations', 'Court', fee)
      return fee
    },
    courtPerPerson: function () {
      return (this.courtTotal / this.people)
    },
    memberFeeTotal: function () {
      var fee = (this.memberFee * this.peopleNonMembers) * (this.taxRate + 1)
      this.$ga.event('Calculations', 'MemberFee', fee)
      return fee
    },
    total: function () {
      return (this.courtTotal + this.memberFeeTotal).toFixed(2)
    },
    nonMemberSplit: function () {
      return Math.ceil(this.courtPerPerson + this.memberFee * (1 + this.taxRate))
    },
    memberSplit: function () {
      return Math.ceil(this.courtPerPerson)
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
