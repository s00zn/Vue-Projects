<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="email" required v-model="email">

    <label>Password</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="-">-</option>
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <div class="skill-inline">
      <input type="text" v-model="tempSkill">
      <button @click.prevent="addSkill">add</button>
    </div>
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click.self.prevent="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="selection-block">
      <label>Interests:</label>
      <div>
        <input type="checkbox" value="frontend" v-model="interests">
        <label>Frontend development</label>
      </div>
      <div>
        <input type="checkbox" value="backend" v-model="interests">
        <label>Backend development</label>
      </div>
      <div>
        <input type="checkbox" value="fullstack" v-model="interests">
        <label>Fullstack development</label>
      </div>
      <div>
        <input type="checkbox" value="uiux" v-model="interests">
        <label>UI/UX</label>
      </div>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>

  <div class="form-inputs">
    <h3>Inputs:</h3>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Skills: {{ skills }}</p>
    <p>Interests: {{ interests }}</p>
    <p>Terms: {{ terms }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        role: '-',
        tempSkill: '',
        skills: [],
        passwordError: '',
        terms: false,
        interests: []
      }
    },
    methods: {
      addSkill() {
        if (this.tempSkill) {
          if (!this.skills.includes(this.tempSkill)) {
            this.skills.push(this.tempSkill);
          }
          this.tempSkill = ''
        }
      },
      deleteSkill(skill) {
        this.skills = this.skills.filter((item) => {
          return skill !== item;
        });
      },
      handleSubmit() {
        //validate pw
        this.passwordError = this.password.length > 5 ?
            '' : 'Password must be at least 6 chars long';

        if (!this.passwordError) {
          console.log('email: ', this.email);
          console.log('password: ', this.password);
          console.log('role: ', this.role);
          console.log('skills: ', this.skills);
          console.log('terms accepted: ', this.term);
        }
      }
    }
  }
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: .6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.pill:hover {
  background: #c5c5c5;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

button:hover {
  background: #0959d0;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0062;
  font-size: .6em;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}

.selection-block {
  background-color: #f3f3f3;
  padding: 1rem 2rem;
  border-radius: 10px;
  margin: 1rem 0;
}


.skill-inline {
  display: flex;
  width: 100%;
  align-items: center;
}

.skill-inline input {
  display: inline-flex;
  position: relative;
}

.skill-inline button {
  display: inline-flex;
  position: relative;
  justify-content: flex-end;
  min-width: 30px;
  background: #ffde0b;
  border: 0;
  padding: 10px;
  margin-top: 0;
  color: #777;
  border-radius: 0;
}

.skill-inline button:hover {
  background: #efcf03;
}

.form-inputs p {
  font-size: .8em;
}
</style>