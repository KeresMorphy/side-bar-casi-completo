
<template>


  <div class="header">
      <a href="#" class="header__logo">Mi catálogo</a>
  
      <div class="header__search">
        <input v-model="searchTerm" type="text" placeholder="Buscar productos..." class="header__search__input">
        <button @click="searchProducts" class="header__search__button">Buscar</button>
      </div>
  
 
    </div>
  
    <!-- Mostrar resultados de búsqueda -->
    <div class="padre">
    <div class="search-results" v-if="searchResults.length > 0">
      <div v-for="user in searchResults" :key="user.id" class="user-item">
        <p>{{ user.nombre }}</p>
        <p>$,{{ user.precio }}</p>
        <img :src="user.imagen" >
        <!-- Agrega más campos según tus necesidades -->
      </div>
    </div>
  
    <!-- Mostrar mensaje si no hay resultados -->
    <div v-else-if="searchTerm !== ''" class="no-results">
      <p>No se encontraron resultados para '{{ searchTerm }}'.</p>
    </div>
  </div>
  </template>
  
  <!-- Header.vue -->
  
  <!-- Header.vue -->
  
  <script>
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/firestore';
  import 'firebase/firestore';
  import { db } from '../assets/firebase.js'; // Asumiendo que firebaseConfig está definido en este archivo
  
  export default {
    name: 'Header',
    data() {
      return {
        searchTerm: '',
        searchResults: [],
      };
    },
    methods: {
      async searchProducts() {
    try {
      const firebaseConfig = db.config;
      firebase.initializeApp(firebaseConfig);
      const firestore = firebase.firestore();
      const productsRef = firestore.collection('Productos');
  
      // Verifica si hay una cadena de búsqueda antes de realizar la consulta
      if (this.searchTerm.trim() !== '') {
        // Realiza la consulta de búsqueda
        const snapshot = await productsRef
          .where('nombre', '==', this.searchTerm.toLowerCase())
          .get();
  
        // Mapea los resultados
        this.searchResults = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } else {
        // Si la cadena de búsqueda está vacía, establece los resultados como vacíos
        this.searchResults = [];
      }
    } catch (error) {
      console.error(error);
      // Maneja el error apropiadamente
    }
  },
  
  
    },
  };
  </script>
  
<style scoped>
.product-found-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.producto-item img {
  width: 200px; /* Ajusta el ancho según tus necesidades */
  height: auto;
}

</style>