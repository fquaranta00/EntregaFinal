import React, { useContext } from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart, getTotalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart">
      <Box display="flex" alignItems="center">
        <Icon as={FiShoppingCart} boxSize={6} />
        <Text ml={2}>Carrito</Text>
        <Text ml={2}>{getTotalQuantity()}</Text> {/* Llama a la función */}
      </Box>
    </Link>
  );
};

export default CartWidget;
