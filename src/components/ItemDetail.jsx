import { useParams } from 'react-router-dom';
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Center, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({ productos }) => {
const { id } = useParams();
const numericId = parseInt(id);
const filteredProducts = productos.filter((producto) => producto.id === numericId);
const [addedQuantity, setAddedQuantity] = useState(0); // Estado para almacenar la cantidad agregada

const [showFinishButton, setShowFinishButton] = useState(false); // Estado para mostrar u ocultar el botón



const { addItem } = useContext(CartContext); // Accede a la función addItem del CartContext

const handleAddToCart = (quantity) => {
  const productToAdd = filteredProducts[0]; // Obtén el producto del array filtrado
  addItem(productToAdd, quantity); // Agrega el producto al contexto con su cantidad
  setAddedQuantity(quantity); // Actualiza el estado de la cantidad agregada

  setShowFinishButton(true); // Mostrar el botón "Terminar mi compra"



  console.log('Producto agregado al carrito:', productToAdd);
  console.log('Cantidad:', quantity);

};

  return (
    <div>
      {filteredProducts.map((p) => (
        <div key={p.id}>
          <Center p='1rem'>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={`../src/assets/img/${p.img}`}
                alt='varias'
              />
              <Stack>
                <CardBody>
                  <Heading size='md'>{p.nombre}</Heading>
                  <Text py='2'>{p.description}</Text>
                  <Text>{p.category}</Text>
                </CardBody>
                <CardFooter>
                  {addedQuantity === 0 ? (
                    <ItemCount onAdd={handleAddToCart} />
                  ) : (
                    <Link to="/cart">
                      <Button colorScheme="green" mt={4}>
                        Terminar mi compra
                      </Button>
                    </Link>
                  )}
                </CardFooter>

              </Stack>
            </Card>
          </Center>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
