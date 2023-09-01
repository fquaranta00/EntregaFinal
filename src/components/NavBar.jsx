import { Box, Flex, Spacer, Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  const categorias = [
    { id: 'legumbres', nombre: 'Legumbres' },
    { id: 'lacteos', nombre: 'Lácteos' },
    { id: 'dulces', nombre: 'Dulces' },
    { id: 'harinas', nombre: 'Harinas' },
    { id: 'varios', nombre: 'Varios' },
  ];



  return (
    <Box bg="purple.400" py={4}>
      <Flex align="center" maxW="1200px" mx="auto">
        <Link to={"/"}>
          <Text color="black" fontSize={25}>
            Compras<Text as="span" fontStyle="italic">Comunitarias</Text>
          </Text>
        </Link>
        <Spacer />
        <Menu>
          <MenuButton as={Link} href="#" color="white">
            Productos
          </MenuButton>
          <MenuList>
            {categorias.map((categoria) => (
              <MenuItem key={categoria.id} color="black">
                <Link to={`/category/${categoria.id}`}>{categoria.nombre}</Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Box mx={4}>
          <Link to={`/about`} color="white" className="navbar-link-prod">
            Productores
          </Link>
        </Box>
        <Box mx={4}>
          <Link to={`/info`} href="#" color="white" className="navbar-link">
            Info
          </Link>
        </Box>
        <Spacer />
        <Box>
          <CartWidget />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
