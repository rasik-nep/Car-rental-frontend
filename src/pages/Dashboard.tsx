import { useState } from "react"
import app from "../config/firebase-info"
import { getDatabase, ref, set, push, get } from "firebase/database"

export default function Dashboard({ token }: { token: string }) {
  console.log("Token: ", token)
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")

  async function saveData() {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, 'data'));
    set(newDocRef, {
      testText1: text1,
      testText2: text2,
    }).then(() => {
      alert("Data saved successfully!")
    }).catch((error) => {
      alert("Error saving data: " + error)
    })
  }

  async function fetchData() {
    const db = getDatabase(app);
    const dbRef = ref(db, 'data');
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      console.log(Object.values(snapshot.val()));
    } else {
      console.log("No data available");
    }
  }

  return (
    <div>
      <p>Dashboard 1</p>

      <input type="text" value={text1} onChange={(e) => setText1(e.target.value)} />
      <input type="text" value={text2} onChange={(e) => setText2(e.target.value)} />
      <br />

      <button onClick={saveData}>
        Save Data
      </button>

      <button onClick={fetchData}>
        Fetch Data
      </button>
    </div>
  )
}
