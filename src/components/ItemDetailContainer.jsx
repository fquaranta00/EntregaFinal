import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  useEffect(() => {
    const db = getFirestore();
    const productoDoc = doc(db, 'COMPRAS', id);

    getDoc(productoDoc)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const productoData = docSnapshot.data();
          setProducto(productoData); // Actualiza el estado con la información del producto
        } else {
          console.log('No se encontró el producto con el ID especificado');
        }
      })
      .catch((error) => {
        console.error('Error al obtener el producto:', error);
      });
  }, [id]);

  return (
    <div>
      {producto && <ItemDetail productos={producto} />} {/* Renderiza solo si producto está definido */}
    </div>
  );
};

export default ItemDetailContainer;
