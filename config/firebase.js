import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';


export const firebaseConfig = {
	apiKey: process.env.GATSBY_FIREBASE_API_KEY,
	authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
	databaseURL: "https://imsa-berkeley.firebaseio.com",
	projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
	storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.GATSBY_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);


const app = firebase.app();
const db = firebase.database();
const storage = firebase.storage();
export { db, storage };
console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');