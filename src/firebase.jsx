import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBDsfcRfIyR-4QdbhvgP4QT9Jnnoi_C9JA",
  authDomain: "deva-portfolio-react.firebaseapp.com",
  projectId: "deva-portfolio-react",
  storageBucket: "deva-portfolio-react.appspot.com",
  messagingSenderId: "61150597935",
  appId: "1:61150597935:web:d2267b913a54da86c107da"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
