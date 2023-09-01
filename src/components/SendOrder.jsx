import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Input, Button, Box, Center, Alert, AlertIcon } from "@chakra-ui/react";

const SendOrder = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [orderSent, setOrderSent] = useState(false);
  const [emailValid, setEmailValid] = useState(true); // Agregar estado para la validación del email

  const { cart, clear } = useContext(CartContext);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar el formato del email antes de enviar la orden
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setEmailValid(false);
      return; // No envíes la orden si el email no es válido
    }

    const order = {
      name,
      email,
      products: cart.map((item) => ({
        id: item.item.id,
        name: item.item.nombre,
        quantity: item.quantity,
      })),
    };

    addDoc(orderCollection, order).then(({ id }) => {
      setOrderId(id);
      clear();
      setOrderSent(true);
    });
  };

  const orderCollection = collection(db, "orden");

  return (
    <Center>
      <Box maxW="400px" p={4}>
        <h1>Enviando órden...</h1>
        {orderSent ? (
          <Alert status="success" mb={4}>
            <AlertIcon />
            ¡Muchas gracias por su compra! Su número de pedido es: {orderId}
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="nombre y apellido"
              onChange={(e) => setName(e.target.value)}
              mb={2}
            />
            <Input
              type="text"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailValid(true); // Restablecer la validación cuando cambia el email
              }}
              mb={2}
              isInvalid={!emailValid} // Marcar el campo como no válido si emailValid es falso
            />
            {!emailValid && (
              <Alert status="error" mb={2}>
                <AlertIcon />
                El email ingresado no es válido.
              </Alert>
            )}
            <Button type="submit" colorScheme="blue">
              Enviar información
            </Button>
          </form>
        )}
      </Box>
    </Center>
  );
};

export default SendOrder;

