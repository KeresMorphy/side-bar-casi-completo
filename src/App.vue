<template>

<div>
    <!-- Pantalla emergente para mostrar información del producto o mensaje de error -->
    <div v-if="showPopup" class="product-popup">
      <div class="popup-content">
        <div v-if="product">
          <h2>{{ product.nombre }}</h2>
          <p>Precio: ${{ product.precio }}</p>
          <img :src="product.imagen" alt="Producto">
          <!-- Agrega más campos según tus necesidades -->
        </div>
        <div v-else>
          <p>¡Producto no encontrado!</p>
        </div>
        <button @click="closePopup">Cerrar</button>
      </div>
    </div>
</div>
  <div id="app">
    <div class="header">
  <h1>MI CATALOGO</h1>
      <div class="header__search">
        <ul class="ulchido"> 
          <router-link to="/login"><li>Login</li></router-link>
          
         <router-link to="/register"><li>Registro</li></router-link> 
          <router-link to="/pop"><li>Pop Up</li></router-link>
        </ul>
        <input v-model="searchTerm" type="text" placeholder="Buscar productos..." class="header__search__input">
        <button @click="searchProducts" class="header__search__button">Buscar</button>
      </div>
    </div>

    <div class="sidebar">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

      <ul>
        <h2>marcas</h2>
        <router-link to="/nike">
          <button class="nike">Nike</button>
        </router-link>

        <router-link to="/home">
          <button class="nike">home</button>
        </router-link>

        <router-link to="/deportes">
          <button class="nike">deportes</button>
        </router-link>
        <hr>
        <br>
        <h2>tipos</h2>
        <button class="nike">mini</button>
        <button class="nike">mediana</button>
        <button class="nike">grande</button>
        <hr>
        <br>
      </ul>
    </div>
    <router-view></router-view>
  </div>


</template>
<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Electrónicos',
          subCategories: [
            { id: 11, name: 'Teléfonos' },
            { id: 12, name: 'Computadoras' },
          ],
        },
        {
          id: 2,
          name: 'Ropa',
          subCategories: [
            { id: 21, name: 'Camisetas' },
            { id: 22, name: 'Pantalones' },
          ],
        },
        // Agrega más categorías según tus necesidades
      ],
      selectedCategories: [],
    };
  },
  methods: {
    filterProducts() {
      // Implementa la lógica para filtrar los productos según las categorías seleccionadas
      // Puedes emitir un evento aquí para notificar al componente principal sobre los cambios
      this.$emit('filter', this.selectedCategories);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.header {
  background-color: #3498db;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;

}


.header__logo {
  margin: 0;
  color: white;
  text-decoration: none;
}

.header__search {
  margin-top: 8px;
  margin-right: 20px;
  /* Ajusta el valor según sea necesario */
  display: flex;
  align-items: center;
}

.header__search__input {
  width: 80%;
  padding: 8px;
  border-radius: 4px;
  width: 10%;
  margin-left: 20px;

}

.header__search__button {
  margin-left: 8px;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  width: 10%;
}

.header__menu {
  list-style-type: none;
  display: flex;
  margin-top: 10px;
  padding: 0;

}

.header__menu__item {
  margin-right: 20px;

}

.header__menu__item__link {
  color: white;
  text-decoration: none;
}

.sidebar {
  height: 200vh;
  width: 200px;

  background-color: #3498db;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: center; /* Alinea el texto al centro */

}

ul.ulchido{
  list-style-type: none;
  padding: 0;
  text-align: center; /* Alinea el texto al centro */
  margin-left: 200px;
}

li {
  display: inline;
  margin-left: 20px;
}


button {
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
  border-radius: 6px;
}</style>
