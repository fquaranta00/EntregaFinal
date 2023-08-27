import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const CartItem = ({ cartItem, onRemove }) => {
  const { item, quantity } = cartItem;

  return (
    <Flex align="center" justify="space-between" p={2} borderWidth={1} rounded="md">
      <Image src={`../src/assets/img/${item.img}`} alt={item.nombre} boxSize={12} />
      <Box flex="1" ml={4}>
        <Text fontSize="md" fontWeight="bold">
          {item.nombre}
        </Text>
        <Text fontSize="sm">${item.price.toFixed(2)}</Text>
        <Text fontSize="sm">Cantidad: {quantity}</Text>
        <Button size="sm" colorScheme="red" onClick={onRemove}>
          Eliminar
        </Button>
      </Box>
    </Flex>
  );
};

export default CartItem;
