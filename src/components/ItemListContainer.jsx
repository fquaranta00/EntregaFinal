import ItemList from "./ItemList";
import { Box, Text, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
  const { category } = useParams()
  
  const productos = [
    {
      id: 1,
      nombre: "Garbanzos",
      description:
        "Estos deliciosos garbanzos son una excelente fuente de proteínas y fibra.",
      stock: 8,
      category: "legumbres",
      img: "imagen-garbanzos.jpg",
      price: 2.99,
    },
    {
      id: 2,
      nombre: "Queso Sardo",
      description:
        "El queso sardo es un producto lácteo de sabor intenso y textura cremosa.",
      stock: 15,
      category: "lacteos",
      img: "imagen-queso-sardo.jpg",
      price: 8.49,
    },
    {
      id: 3,
      nombre: "Dulce de Higo",
      description:
        "Nuestro dulce de higo es una exquisita combinación de higos frescos y azúcar.",
      stock: 5,
      category: "dulces",
      img: "imagen-dulce-de-higo.jpg",
      price: 3.25,
    },
    {
      id: 4,
      nombre: "Harina integral x 1kg",
      description:
        "Nuestra harina integral es molida a partir de granos de trigo de alta calidad.",
      stock: 10,
      category: "harinas",
      img: "imagen-harina-integral.jpg",
      price: 1.75,
    },
    {
      id: 5,
      nombre: "Maní tostado",
      description:
        "Nuestro maní tostado es un snack delicioso y saludable.",
      stock: 12,
      category: "varios",
      img: "imagen-mani-tostado.jpg",
      price: 2.49,
    },
    {
      id: 6,
      nombre: "Lentejas",
      description:
        "Las lentejas son una excelente fuente de proteínas vegetales y minerales.",
      stock: 3,
      category: "legumbres",
      img: "imagen-lentejas.jpg",
      price: 1.99,
    },
    {
      id: 7,
      nombre: "Queso cremoso",
      description:
        "Nuestro queso cremoso tiene una textura suave y un sabor delicado.",
      stock: 7,
      category: "lacteos",
      img: "imagen-queso-cremoso.jpg",
      price: 5.99,
    },
    {
      id: 8,
      nombre: "Dulce de Durazno",
      description:
        "Nuestro dulce de durazno es una deliciosa conserva hecha con duraznos maduros y azúcar.",
      stock: 2,
      category: "dulces",
      img: "imagen-dulce-de-durazno.jpg",
      price: 4.75,
    },
    {
      id: 9,
      nombre: "Harina integral 1/2kg",
      description:
        "Nuestra harina integral es molida a partir de granos de trigo de alta calidad.",
      stock: 18,
      category: "harinas",
      img: "imagen-harina-integral-05kg.jpg",
      price: 0.99,
    },
    {
      id: 10,
      nombre: "Nachos y tortillas de maíz",
      description:
        "Nuestros nachos y tortillas de maíz son ideales para acompañar salsas y dips.",
      stock: 9,
      category: "varios",
      img: "imagen-nachos-y-tortillas-de-maiz.jpg",
      price: 3.99,
    },
  ];
    
  
  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("no hay datos"))
    }
  })

  getProductos
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })


  const filteredProducts = productos.filter((producto) => producto.category === category)
  console.log(filteredProducts)

  return (
    // <Box>
    //   <Text>{greeting}</Text>
    // </Box>
    <center p='1rem'>
      <ItemList
        productos={filteredProducts} />
    </center>


  )
}

export default ItemListContainer