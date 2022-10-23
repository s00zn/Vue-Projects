<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/jobs">Jobs</router-link>
<!--    <router-link :to="{ name: 'about' }">About</router-link>-->
  </nav>

  <button @click="back">Go back</button> |
  <button @click="redirect">Home</button> |
  <button @click="forward">Go forward</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'home' });
    },
    back() {
      // this.$router.back();
      this.$router.go(-1);
    },
    forward() {
      // this.$router.forward();
      this.$router.go(1);
    }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  background-color: #399f71;
}

nav a:hover {
  background-color: #4dd799;
}

nav a.router-link-exact-active {
  background-color: #42b983;
  color: white;
}

nav a.router-link-exact-active:hover {
  background-color: #4dd799;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

button:hover {
  background: #aaa;
}

</style>
