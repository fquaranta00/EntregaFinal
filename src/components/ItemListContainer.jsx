import React, { useEffect, useState } from "react";
import { Box, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const comprasCollection = collection(db, "COMPRAS");

    getDocs(comprasCollection)
      .then((querySnapshot) => {
        const productos = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(productos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  let filteredProducts = data;

  // Filtra por categoría si una categoría está definida
  if (category) {
    filteredProducts = data.filter((producto) => producto.category === category);
  }

  return (
    <Center p="1rem">
      <Box maxW="1200px" mx="auto">
        <ItemList productos={filteredProducts} />
      </Box>
    </Center>
  );
};

export default ItemListContainer;
