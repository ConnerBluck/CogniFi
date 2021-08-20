import * as firebase from 'firebase';
import "firebase/firestore";
const FirebaseConfig = {
    apiKey: 'AIzaSyCL-KVj_pQMy1cOwtNxl4C_hlC7XGe0aNc',
    authDomain: 'cognifi-92859.firebaseapp.com',
    databaseURL: 'https://cognifi-92859.firebaseio.com',
    projectId: 'cognifi-92859',
    storageBucket: 'cognifi-92859.appspot.com',
    appId: '1:853062102785:android:ac5ba607e8a2c81fad7500',
  };
  // Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}
export default firebase;