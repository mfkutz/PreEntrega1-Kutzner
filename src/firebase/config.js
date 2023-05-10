import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBNhLSX6mDbqLMCrAEV-1jmCjGfmPeY0eM",
    authDomain: "coderhouse-ecommerce-b97a8.firebaseapp.com",
    projectId: "coderhouse-ecommerce-b97a8",
    storageBucket: "coderhouse-ecommerce-b97a8.appspot.com",
    messagingSenderId: "98342518620",
    appId: "1:98342518620:web:97874b4a7ab2b839258b99"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app