// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_FIREBASE_APPID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { auth, db }
