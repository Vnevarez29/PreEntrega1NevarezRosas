import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZFPiihzV47pcl1_IO4wGcxFCFXpLrh_g",
  authDomain: "pruebacoderreact.firebaseapp.com",
  projectId: "pruebacoderreact",
  storageBucket: "pruebacoderreact.appspot.com",
  messagingSenderId: "784337455528",
  appId: "1:784337455528:web:ce9cffbbb53e5795c2359d"
};

const app = initializeApp(firebaseConfig);
export const db= getFireStore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
