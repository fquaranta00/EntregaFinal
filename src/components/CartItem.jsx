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
      bg="white" // Fondo blanco
      boxShadow="md" // Sombra
      mb={4} // Espacio inferior entre elementos del carrito
    >
      <Image
        src={item.img}
        alt={item.nombre}
        boxSize={12}
        objectFit="cover" // Ajusta la imagen al tamaño del cuadro
        borderRadius="md" // Borde redondeado
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
          mt={2} // Espacio superior del botón
          onClick={onRemove}
        >
          Eliminar
        </Button>
      </Box>
    </Flex>
  );
};

export default CartItem;
