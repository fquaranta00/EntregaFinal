import { Link,useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, removeItem, clear } = useCartContext();
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (total, item) => total + item.item.price * item.quantity,
    0
  );

  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Carrito de compras
      </Text>
      {cart.length === 0 ? (
        <VStack spacing={4}>
          <Text>No hay ítems en el carrito.</Text>
          <Button variant='outline' colorScheme='teal' mt={4} ml={4} onClick={() => navigate('/productos')}>Volver al catálogo</Button>
        </VStack>
      ) : (
        <VStack spacing={4}>
          {cart.map((cartItem) => (
            <CartItem
              key={cartItem.item.id} // Agrega la key prop para cada CartItem
              cartItem={cartItem}
              onRemove={() => removeItem(cartItem.item.id)}
            />
          ))}
          <Text fontSize="lg">Precio total: ${totalPrice.toFixed(2)}</Text>
          <Button colorScheme="red" onClick={clear}>
            Vaciar carrito
          </Button>
          <Link to={`/sendorder`}> 
            <Button colorScheme="green">Confirmar compra</Button>
          </Link>
        </VStack>
      )}
    </Box>
  );
};

export default Cart;
