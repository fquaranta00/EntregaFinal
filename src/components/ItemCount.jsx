import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const ItemCount = ({ onAdd }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const clear = () => {
    setContador(0);
  };

  const handleAdd = () => {
    onAdd(contador);
    clear();
  };

  return (
    <Box textAlign="center" mt={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Cantidad: {contador}
      </Text>
      <Button colorScheme="blue" onClick={restar} mr={2}>
        -
      </Button>
      <Button colorScheme="blue" onClick={sumar} mr={2}>
        +
      </Button>
      <Button colorScheme="orange" onClick={clear} mr={2}>
        Clear
      </Button>
      <Button colorScheme="green" onClick={handleAdd} mr={2}>
        Agregar al Carrito
      </Button>
    </Box>
  );
};

export default ItemCount;
