import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtyiJ7U_dFpXXa0_mmfEUmY5eQ4gRkoR8",
  authDomain: "comprascomunitarias-4712-e4892.firebaseapp.com",
  projectId: "comprascomunitarias-47120",
  storageBucket: "comprascomunitarias-47120.appspot.com",
  messagingSenderId: "410316024308",
  appId: "1:410316024308:web:6bc94cc500b4fc12b271a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider>

    <App />

  </ChakraProvider>

)

