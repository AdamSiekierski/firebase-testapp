import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCok6oiD5KMY4KsnHPfVAE6wF8bcg4Kako',
  authDomain: 'testapp-e1cb3.firebaseapp.com',
  databaseURL: 'https://testapp-e1cb3.firebaseio.com',
  projectId: 'testapp-e1cb3',
  storageBucket: 'testapp-e1cb3.appspot.com',
  messagingSenderId: '38746034120',
  appId: '1:38746034120:web:d6984c9806127b1748fafd',
  measurementId: 'G-QJLRQH4E8F',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
