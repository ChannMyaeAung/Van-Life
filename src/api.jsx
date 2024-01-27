// Import the functions from the SDKs
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADoWlOOTtF_0YOA9DRTA9z4s_YKMOCfL0",
  authDomain: "vanlife-1cd87.firebaseapp.com",
  projectId: "vanlife-1cd87",
  storageBucket: "vanlife-1cd87.appspot.com",
  messagingSenderId: "115191293585",
  appId: "1:115191293585:web:c414da6453e9b4252e8130",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);

  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}
