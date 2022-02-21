// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { 
collection,
getFirestore,
addDoc,
getDocs,
onSnapshot,
deleteDoc,
doc,
getDoc,
updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-K1fdnGLs29g4ppxb_OLkaqsYvHUti44",
  authDomain: "proyecto-portafolio-dcc2c.firebaseapp.com",
  projectId: "proyecto-portafolio-dcc2c",
  storageBucket: "proyecto-portafolio-dcc2c.appspot.com",
  messagingSenderId: "183418387091",
  appId: "1:183418387091:web:6babcd9d567653fecc2b66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (title, description) => {
    addDoc(collection(db, "tasks"), {title, description})
}

export const getTasks = () => getDocs(collection(db, "tasks"))

export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback)

export const deleteTast = (id) => deleteDoc(doc(db, "tasks",id))

export const getTast = (id) => getDoc(doc(db,"tasks", id))

export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields)