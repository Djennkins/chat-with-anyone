import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
	apiKey: "AIzaSyAhfFYtS8lPUWoHqA1LTTo3hZr5LtBB4Ko",
	authDomain: "saas-translation-app-a2282.firebaseapp.com",
	projectId: "saas-translation-app-a2282",
	storageBucket: "saas-translation-app-a2282.appspot.com",
	messagingSenderId: "701372030431",
	appId: "1:701372030431:web:ef31c82138ad85fc58386a",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
