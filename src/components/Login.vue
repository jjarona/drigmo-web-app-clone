<template>
  <div class="center">
    <h1>Create an account</h1>
    <p @click="goToLogin">Already have an account? <span class="link">Log in</span></p>

    <div class="input-group">
      <label>What should we call you?</label>
      <input v-model="username" placeholder="Enter your username" @input="validateUsername">
      <p class="error" v-if="usernameError">{{ usernameError }}</p>
    </div>

    <div class="input-group">
      <label>What's your email?</label>
      <input type="email" v-model="email" placeholder="Enter your email address">
      <p class="error" v-if="emailError">{{ emailError }}</p>
    </div>

    <div class="input-group">
      <label>Create a password</label>
      <input type="password" v-model="password" placeholder="Enter your password">
    </div>

    <button :disabled="!isValid" @click="createAccount">Create an account</button>
    <p class="error" v-if="signupError">{{ signupError }}</p>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      usernameError: '',
      emailError: '',
      signupError: ''
    };
  },
  computed: {
    isValid() {
      return !this.usernameError && !this.emailError && this.username && this.email && this.password;
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login');
    },
    validateUsername() {
      const regex = /^[a-zA-Z0-9_.]+$/;
      this.usernameError = regex.test(this.username) ? '' : 'Invalid username';
    },
    async createAccount() {
      try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
        await userCredential.user.updateProfile({
          displayName: this.username
        });

        // Check for duplicate username
        const db = firebase.database();
        const ref = db.ref('users');
        const snapshot = await ref.once('value');
        const users = snapshot.val();

        if (users && Object.values(users).includes(this.username)) {
          this.signupError = 'Username already exists';
          await firebase.auth().currentUser.delete();
          return;
        }

        await ref.child(userCredential.user.uid).set(this.username);
      } catch (error) {
        this.signupError = error.message;
      }
    }
  }
};
</script>

<style scoped>
.center {
  text-align: center;
}
.input-group {
  margin-bottom: 16px;
}
.error {
  color: red;
}
.link {
  color: blue;
  cursor: pointer;
}
</style>
