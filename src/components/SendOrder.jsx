import { collection, addDoc, getFirestore } from "firebase/firestore"
import { useState } from "react"
const SendOrder = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(orderCollection, order).then(({id}) =>
        setOrderId(id))
    }

    const order = {
        name,
        email
    }

    const orderCollection = collection (db, "orden")

  return (
    <div>
        <h1>Enviando ordenes</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="nombre y apellido"
            onChange={(e) => setName(e.target.value)}
            />
            <input type="text" placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">enviar informacion</button>
        </form>
        <p>numero de orden: {orden}</p>
    </div>
  )
}

export default SendOrder