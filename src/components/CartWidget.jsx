import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart"> {/* Enlace al carrito */}
      <Box display="flex" alignItems="center">
        <Icon as={FiShoppingCart} boxSize={6} />
        <Text ml={2}>Carrito</Text>
        {totalQuantity > 0 && <Text ml={2}>{totalQuantity}</Text>}
      </Box>
    </Link>
  );
};

export default CartWidget;
