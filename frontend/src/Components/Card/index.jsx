import { Link } from "react-router-dom";
import { ShopMaqoaContext } from "../../Context";
import { useContext } from "react";
// import { useContext, useEffect } from "react";

const Card = ({ data }) => {
  const { addToCart } = useContext(ShopMaqoaContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

//   useEffect(() => {
//     console.log('Carrito actualizado:');
//     console.table(carrito);
//   }, [carrito]);

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
        <h3 className="font-bold text-xl">{data.title}</h3>
        <p>{data.description}</p>
        <p className="font-bold text-lg">$ <span>{data.price}</span></p>

        <div className="flex justify-between py-2">
          <Link
            to={`/product/${data._id}`}
            className="bg-white rounded text-black transition py-1 px-2 self-end border border-black hover:bg-black hover:border-transparent hover:text-white"
          >
            Details
          </Link>
          <button
            onClick={() => handleAddToCart(data)}
            className="bg-black rounded text-white transition py-1 px-2 self-end border border-transparent hover:bg-white hover:border-black hover:text-black"
          >
            Add to cart
          </button>
        </div>
        {/* CATEGORIAS */}
        <ul className="py-2 opacity-80 text-[12px] flex">
          <li className="py-1 px-2 text-xs">Category:</li>
          {data.categories.map((categ) => (
            <li key={categ._id} className="bg-gray-400 rounded py-1 px-2 text-gray-300 text-xs">
              {categ.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
