import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCEF0Kk5YSxP1d80OgIEV6YeV2sQmQyOXA",
  authDomain: "beerapp-2f3a1.firebaseapp.com",
  databaseURL: "https://beerapp-2f3a1.firebaseio.com",
  projectId: "beerapp-2f3a1",
  storageBucket: "beerapp-2f3a1.appspot.com",
  messagingSenderId: "125341464409"
};

export const Firebase = firebase.initializeApp(config)
// export const eventsRef = Firebase.database...
