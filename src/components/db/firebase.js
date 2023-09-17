import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAL3pLe-E5D-757cxhnotYeuAn_CV9offc",
    authDomain: "react-ch-33423.firebaseapp.com",
    projectId: "react-ch-33423",
    storageBucket: "react-ch-33423.appspot.com",
    messagingSenderId: "878775148204",
    appId: "1:878775148204:web:a14b1bcf8367f089224909"
  };
  
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);