 
 <template>

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
  