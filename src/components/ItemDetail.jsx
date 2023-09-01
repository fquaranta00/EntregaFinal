import React, { useState, useContext } from 'react';
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Center, Button } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ productos }) => {
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();

  const product = productos;
  const [addedQuantity, setAddedQuantity] = useState(0);
  const [showFinishButton, setShowFinishButton] = useState(false);

  const handleAddToCart = (quantity) => {
    const productToAdd = product;
    addItem(productToAdd, quantity);
    setAddedQuantity(quantity);
    setShowFinishButton(true);
  };

  const handleFinishPurchase = () => {
    navigate('/cart');
  };

  return (
    <div>
      <Center p='1rem'>
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg="rgb(255, 217, 183)">
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={product.img}
            alt={product.nombre}
          />
          <Stack align="center">
            <CardBody>
              <Heading size='md'>{product.nombre}</Heading>
              <Text py='2'>{product.description}</Text>
              <Text>{product.category}</Text>
            </CardBody>
            <CardFooter>
              {addedQuantity === 0 ? (
                <ItemCount onAdd={handleAddToCart} />
              ) : (
                <>
                  <Button variant='solid' colorScheme='green' mt={4} onClick={handleFinishPurchase}>
                    Terminar mi compra
                  </Button>
                  <Button variant='outline' colorScheme='teal' mt={4} ml={4} onClick={() => navigate('/productos')}>
                    Volver al catálogo
                  </Button>
                </>
              )}
            </CardFooter>
          </Stack>
        </Card>
      </Center>
    </div>
  );
};

export default ItemDetail;
