<template>
    <div class="pop-up" v-show="popUp">
      <div class="pop-up-inner">
        <div class="pop-up-close" @click="togglePopUp()">&times;</div>
  
        <div class="anuncio-promocional">
          <h1 class="color">¡Ilumina tu Navidad con Esmeralda Joyería!</h1>
          <p>Descubre la elegancia atemporal y la calidad excepcional de nuestras joyas, perfectas para celebrar momentos especiales.</p>
          <p>Esta temporada, regala belleza con descuentos exclusivos en cada compra. ¡Haz que esta Navidad sea verdaderamente inolvidable!</p>
  
          <div class="descuentos">
            <p><span class="destacado">🌟 Descuento Especial de Navidad:</span> 20% de descuento en toda la colección.</p>
            <p><span class="destacado">✨ Compra con Confianza:</span> Garantía de devolución extendida hasta 30 días.</p>
            <p><span class="destacado">🎁 Envoltura de Regalo Gratuita:</span> Todos los pedidos incluyen un elegante empaque festivo.</p>
          </div>
  
          <p class="">¡Visítanos hoy mismo y encuentra la joya perfecta para tus seres queridos!</p>
          <br />
          <button class="btn" @click="togglePopUp()">Explora la Colección</button>
  
          <p class="condiciones">*Oferta válida hasta el 31 de diciembre. Se aplican términos y condiciones.
            ¡Esmeralda Joyería - Donde la elegancia encuentra su hogar! 🎄✨
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const popUp = ref(true)
  
  function togglePopUp() {
    this.popUp = !this.popUp
  }
  </script>
  
  <style scoped>
  .pop-up {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 32px 16px 120px;
    height: 100vh;
    width: 100%;
    background-color: rgba(104, 136, 216, 0.5);
    display: grid;
    place-items: center;
  }
  
  .pop-up-close {
    position: absolute;
    height: 52px;
    width: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    font-size: 3rem;
    color: #d6d6d6;
    cursor: pointer;
  }
  
  .pop-up-inner {
    background-color: #fff;
    color: #000;
    position: relative;
    width: 60%;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    transition: all 250ms ease-in-out;
  }
  
  .anuncio-promocional {
    color: #6b2737;
  }
  
  .destacado,
  .descuentos,
  p {
    font-size: 13px;
  }
  
  .condiciones {
    font-size: 11px;
    color: #e06287;
  }
  
  .color {
    color: #e06287;
  }
  
  .btn {
    background-color: #e06287;
    color: #ffffff;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  
    .pop-up-inner {
      opacity: 0;
      transform: translateY(-32px);
    }
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all 250ms ease-in-out;
  }
  
  .fade-leave-active {
    transition-delay: 250ms;
  }
  </style>
  