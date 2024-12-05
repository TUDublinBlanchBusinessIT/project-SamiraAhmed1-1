import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC6Sequ-5StxQt4EGhuiEdvwKHxl-MjZ3Y",
  database: "https://borrowbuddy-801e2.firebaseapp.com",
  authDomain: "borrowbuddy-801e2.firebaseapp.com",
  projectId: "borrowbuddy-801e2",
  storageBucket: "borrowbuddy-801e2.appspot.com",
  messagingSenderId: "681414019242",
  appId: "1:681414019242:web:860f688fcdbd563d8768d3",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
