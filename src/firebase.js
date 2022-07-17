import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhkwBfdBQt8JbXwag4AyQcJPshSC26gnU",
  authDomain: "tour-and-travel-agency-530b7.firebaseapp.com",
  projectId: "tour-and-travel-agency-530b7",
  storageBucket: "tour-and-travel-agency-530b7.appspot.com",
  messagingSenderId: "543044096211",
  appId: "1:543044096211:web:2db7c38d2ead879d5a8426",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export {auth};