import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, removeItem, clear } = useCartContext();

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
          <Link to="/">Volver al catálogo</Link>
        </VStack>
      ) : (
        <VStack spacing={4}>
          {cart.map((cartItem) => (
            <CartItem
              key={cartItem.item.id}
              cartItem={cartItem}
              onRemove={() => removeItem(cartItem.item.id)}
            />
          ))}
          <Text fontSize="lg">Precio total: ${totalPrice.toFixed(2)}</Text>
          <Button colorScheme="red" onClick={clear}>
            Vaciar carrito
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Cart;
