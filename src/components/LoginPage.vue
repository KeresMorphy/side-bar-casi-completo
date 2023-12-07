<template>
      <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="signIn">
      <p>
        <label for="email">Correo Electrónico:</label
        ><input type="email" id="email" v-model="email" required />
      </p>
      <p>
        <label for="password">Contraseña:</label
        ><input type="password" id="password" v-model="password" required />
      </p>
      <p>
        <button type="submit">Iniciar Sesión</button>
      </p>

      <!-- Mostrar mensaje de éxito -->
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();
const successMessage = ref(""); // New variable for success message

const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuario autenticado:', user);

      // Update success message
      successMessage.value = 'Inicio de sesión exitoso';

      // You can redirect to another page after authentication
      router.push('/dashboard');
    })
    .catch((error) => {
      console.error('Error al autenticar:', error.message);
    });
};
</script>

<style scoped>
.login-container {
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

.success-message {
  color: green;
  margin-top: 10px;
}
</style>
