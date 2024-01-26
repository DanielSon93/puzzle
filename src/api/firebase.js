import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { v4 as uuid4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function addNewPuzzle(title, description, wordList, subject) {
  const id = uuid4();
  set(ref(database, `puzzle/subjects/${subject}/${title}`), {
    description,
    wordList,
    id,
  });
}

export async function getAllPuzzles() {
  const dbRef = ref(database);
  get(child(dbRef, "/puzzle"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.exists());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error("Firebase Error", error);
    });
}
