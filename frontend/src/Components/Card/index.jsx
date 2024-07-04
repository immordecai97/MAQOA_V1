import { Link } from "react-router-dom";
import { ShopMaqoaContext } from "../../Context";
import { useContext, useEffect } from "react";
import { CategoriesUl } from "../Categories";
// import { useContext, useEffect } from "react";

const Card = ({ data }) => {
  const { addToCart } = useContext(ShopMaqoaContext);
  const store = data.productBy.name
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  useEffect(() => {
    console.log(data)
    console.log(store)
  }, [])

  return (
    <div className="max-w-60 rounded shadow flex flex-col">
      {/* IMAGEN DEL PRODUCTO */}
      <Link to={`/product/${data._id}`}>
        <figure className="max-w-60 max-h-60 overflow-hidden rounded">
          <img
            className="w-full transition hover:scale-150"
            src={Array.isArray(data.images) ? data.images[0] : data.images}
            alt={data.title}
          />
        </figure>
      </Link>
      {/* DATOS DEL PRODUCTO */}
      <div className="p-2 flex flex-col">
        {/* TIENDA SHOP */}
        <div className="flex items-center gap-2">
          <figure className="rounded-full w-[2rem] h-[2rem] overflow-hidden flex items-center">
            <img
              src="https://i.pinimg.com/736x/2b/58/d9/2b58d965cdee09c70ed00924a162c6b2.jpg"
              alt="Shazi"
              className="w-full transition hover:scale-150 h-full object-cover"
            />
          </figure>
          <p className="text-xs">
            <span className="font-bold">Shop: </span>
            <span className="hover:text-blue-600 hover:underline cursor-pointer">Shazia</span>
          </p>
        </div>
        {/* MÁS DATOS */}
        {/* TITULO DEL PRODUCTO */}
        <h3 className="font-bold text-xl">{data.title}</h3>
        {/* DESCRIPCION */}
        <p>{data.description}</p>
        <div className="flex justify-between items-center">
          {/* PRECIO */}
          <p className="font-bold text-lg">$<span>{data.price}</span></p>
          {/* CATEGORIAS */}
          <CategoriesUl categories={data.categories} />
        </div>
        {/* LINK A DETALLES */}
        <div className="flex flex-col gap-2 mt-2">
          <Link
            to={`/product/${data._id}`}
            className=" text-center w-full bg-white rounded text-black transition py-1 px-2 self-end border border-black hover:bg-black hover:border-transparent hover:text-white">
            Details
          </Link>
          {/* BOTON AGREGAR AL CARRITO */}
          <button
            onClick={() => handleAddToCart(data)}
            className="w-full bg-black rounded text-white transition py-1 px-2 self-end border border-transparent hover:bg-white hover:border-black hover:text-black">
            Add to cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;
