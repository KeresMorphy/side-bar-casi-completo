<template>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
 <div class="register-container">
    <h1>Create an Account</h1>
    <p>
      <label for=""> Email </label
      ><input
        type="email"
        placeholder="Proporciona tu email"
        v-model="email"
        required
      />
    </p>
    <p>
      <label for="">Password </label
      ><input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />
    </p>
    <p>
      <button @click="register">Submit</button>
    </p>
    <p>
      <button @click="signInWithGoogle"> Sign In With Google</button>
    </p>
  </div>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Successfully registered!");
      router.push('/');
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  // Implement Google sign-in logic here
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

label {
  display: block;
  margin-bottom: 8px;
}
</style>