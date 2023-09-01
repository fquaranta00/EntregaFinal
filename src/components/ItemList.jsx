import Items from "./Items"

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((p) => {
        return (
          <Items
            key={p.id}
            id={p.id}
            nombre={p.nombre}
            description={p.description}
            category={p.category}
            stock={p.stock}
            img={p.img}
          />
        )
      })
      }
    </>
  )
}

export default ItemList