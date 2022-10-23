<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <h2>{{ job.short }}</h2>
    <p>{{ job.details }}</p>
  </div>

  <div v-else>
    <p>Loading details...</p>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'id',
    'short',
    'description'
  ],
  data() {
    return {
      job: null,
  //     id: this.$route.params.id
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
        .then(response => response.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
h2 {
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 0;
}

p {
  margin: 0;
}
</style>