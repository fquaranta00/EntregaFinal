import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const CartItem = ({ cartItem, onRemove }) => {
  const { item, quantity } = cartItem;

  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      borderWidth={1}
      rounded="md"
      bg="white"
      boxShadow="md"
      mb={4}
    >
      <Image
        src={item.img}
        alt={item.nombre}
        boxSize={12}
        objectFit="cover"
        borderRadius="md"
      />
      <Box flex="1" ml={4}>
        <Text fontSize="lg" fontWeight="bold">
          {item.nombre}
        </Text>
        <Text fontSize="md">Precio: ${item.price.toFixed(2)}</Text>
        <Text fontSize="md">Cantidad: {quantity}</Text>
        <Button
          size="sm"
          colorScheme="red"
          mt={2}
          onClick={onRemove}
        >
          Eliminar
        </Button>
      </Box>
    </Flex>
  );
};

export default CartItem;
