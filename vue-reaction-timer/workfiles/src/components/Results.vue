<template>
  <p>Reaction time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: [ 'score' ],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Lightning fast'
    } else if (this.score < 400) {
      this.rank = 'flexin those flexes'
    } else {
      this.rank = 'Took you forever'
    }
  }
}
</script>

<style>
.rank {
  font-size: 1.6em;
  color: #03cfb4;
  font-weight: bold;
}
</style>