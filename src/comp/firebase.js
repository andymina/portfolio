import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBS062uZ6pz1cvapMzNI_xW0-Z2t5Y2ySY",
  authDomain: "portfoliosite-cd7b2.firebaseapp.com",
  databaseURL: "https://portfoliosite-cd7b2.firebaseio.com",
  projectId: "portfoliosite-cd7b2",
  storageBucket: "portfoliosite-cd7b2.appspot.com",
  messagingSenderId: "171071612626",
  appId: "1:171071612626:web:f5b5011ec14640cf"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
