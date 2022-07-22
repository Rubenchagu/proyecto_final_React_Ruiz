
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBzzb_OoKpw0cE2KzRch_ASx8Nj3mXmn5g",
  authDomain: "nft-shop-ruiz.firebaseapp.com",
  projectId: "nft-shop-ruiz",
  storageBucket: "nft-shop-ruiz.appspot.com",
  messagingSenderId: "851966289767",
  appId: "1:851966289767:web:20550d8c1b431c2a9af1c2"
};

const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app)