import { useState } from "react"
import app from "../config/firebase-info"
import { getDatabase, ref, set, push, get } from "firebase/database"

export default function Dashboard({ token }: { token: string }) {
  console.log("Token: ", token)
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")

  async function saveData() {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, 'data/services'));
    set(newDocRef, {
      index: "03",
      firstSpan: "Transparent",
      secondSpan: "Pricing",
      descriptionShort: "Emphasize transparent pricing with no hidden fees. Provide details about what's included in the rental cost.",
      descriptionLong: "At Shan Vehicle Rental, transparency is the cornerstone of our commitment to customer satisfaction. Our pricing model is straightforward and devoid of any hidden fees, ensuring that you have a clear understanding of the costs associated with your rental. We believe in providing you with a comprehensive breakdown of charges, so you know exactly what you're paying for.\n\nOur transparent pricing includes all the essentials, from the base rental fee to taxes and any applicable surcharges. We take pride in being upfront about our pricing structure, eliminating surprises when it comes time to settle your bill. Additionally, we offer detailed information on what is covered within the rental cost, ensuring that you have full visibility into the value you receive.\n\nFor added convenience, our website features a user-friendly interface where you can easily view and compare prices, explore available discounts, and customize your rental package based on your preferences. Shan Vehicle Rental is dedicated to delivering a pricing experience that is as reliable and transparent as our fleet of vehicles.",
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
      <p>Dashboard</p>

      {/* <input type="text" value={text1} onChange={(e) => setText1(e.target.value)} />
      <input type="text" value={text2} onChange={(e) => setText2(e.target.value)} />
      <br /> */}

      <button onClick={saveData}>
        Save Data
      </button>

      <button onClick={fetchData}>
        Fetch Data
      </button>
    </div>
  )
}
