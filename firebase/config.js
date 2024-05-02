import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAddzpVxMsy0AvJInj3bPvWM_pEjTFMVAI",
  authDomain: "miniblog-62de1.firebaseapp.com",
  projectId: "miniblog-62de1",
  storageBucket: "miniblog-62de1.appspot.com",
  messagingSenderId: "645311125064",
  appId: "1:645311125064:web:01669a3474a35132e36a7d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };