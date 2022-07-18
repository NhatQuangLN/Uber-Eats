import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBJgm_IiN47VDPR6KDSB28YL_Elmu3-KcU",
  authDomain: "uber-eats-clone-6a46b.firebaseapp.com",
  projectId: "uber-eats-clone-6a46b",
  storageBucket: "uber-eats-clone-6a46b.appspot.com",
  messagingSenderId: "677873997839",
  appId: "1:677873997839:web:1300635f2d1ec152526b7a",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
