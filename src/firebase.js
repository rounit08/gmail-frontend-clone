import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyC676Qwt2F8A13vYBwqCPUO6VUvCnNeTvQ",
  authDomain: "clone-13a03.firebaseapp.com",
  projectId: "clone-13a03",
  storageBucket: "clone-13a03.appspot.com",
  messagingSenderId: "365072229177",
  appId: "1:365072229177:web:299186a494fc005f1d3ee8",
  measurementId: "G-V0XF0F981Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);