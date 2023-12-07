// Importa las funciones necesarias desde los SDKs de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configuración de tu aplicación de Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbOQfljiCpu-4If8QpdqpgpygHbwDnRnc",
    authDomain: "vue-proyect-b3d69.firebaseapp.com",
    projectId: "vue-proyect-b3d69",
    storageBucket: "vue-proyect-b3d69.appspot.com",
    messagingSenderId: "32511714566",
    appId: "1:32511714566:web:87407668b0bc024c1fea87",
    measurementId: "G-0Q14P33KD5"
  };

// Inicializa tu aplicación de Firebase
const app = initializeApp(firebaseConfig);
// Elimina la línea que inicializa 'analytics' si no lo estás utilizando
// const analytics = getAnalytics(app);

// Obtiene la instancia de auth después de la inicialización de Firebase
const auth = getAuth(app);

// Exporta auth para que pueda ser utilizado en otros lugares de tu aplicación
export { auth };

// Puedes exportar otras cosas según tus necesidades
export { /* ... */ };
