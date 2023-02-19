import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBDenJ38FyzAKCvkxk4hN3vBXM87JmjdCo",
    authDomain: "tugas-ec19d.firebaseapp.com",
    projectId: "tugas-ec19d",
    storageBucket: "tugas-ec19d.appspot.com",
    messagingSenderId: "954650998626",
    appId: "1:954650998626:web:7707fdfcb6be5365981e3b",
    measurementId: "G-QY86QDLSKS"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;