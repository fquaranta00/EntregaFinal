import { Card, CardBody, CardFooter, Stack, Text, Heading, Button, Image, Center, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Items = ({ nombre, description, id, category, stock, img }) => {
  return (
    <Center p='1rem'>
      <Card
        overflow='hidden'
        variant='outline'
        maxW='800px'
        mx='auto'
        bg="rgb(255, 217, 183)"
      >
        <Flex direction='column'>
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={img}
            alt={nombre}
          />

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
        </Flex>
      </Card>
    </Center>
  )
}

export default Items

