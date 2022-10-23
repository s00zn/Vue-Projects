<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div class="job" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'jobDetails',
          params: { id: job.id,
                    title: job.title,
                    short: job.short,
                    details: job.details }}">
        <h2>{{ job.title }}</h2>
        <p>{{ job.short }}</p>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading job-overview...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [ ] //data will be added in here
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(data => this.jobs = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style>
.job {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job:hover {
  background: #ddd;
}

.job a {
  text-decoration: none;
}

.job h2 {
  margin: 0;
}

.job p {
  margin: 0;
  font-style: italic;
}

</style>