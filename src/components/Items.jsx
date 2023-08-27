import { Card, CardBody, CardFooter, Stack, Text, Heading, Button, Image, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Items = ({ nombre, description, id, category, stock, img }) => {
  console.log(img)
  return (
    <Center p='1rem'>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        maxW='800px' // Limita el ancho de la tarjeta a 800px
        mx='auto' // Centra horizontalmente la tarjeta
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={`../src/assets/img/${img}`} // Ruta relativa de la imagen
          alt='varias'
        />

        <Stack ml={{ base: 0, sm: '1rem' }} mt={{ base: '1rem', sm: 0 }}>
          <CardBody>
            <Heading size='md'>{nombre}</Heading>
            <Text>Categoría: {category}</Text>
            <Text py='2'>{description}</Text>
            <Text py='2'>Stock: {stock}</Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' colorScheme='blue'>
              <Link to={`/items/${id}`}>
                Detalles
              </Link>
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  )
}

export default Items
