import { useParams } from "react-router-dom";
import LayoutStore from "../../Components/LayoutStore";
import "./style.css";
import { useContext, useEffect } from "react";
import { ShopMaqoaContext } from "../../Context";
import { fetchStoreById } from '../../Services/store.service.js'
import ProductstUlShop from "../../Components/ProductstUlShop";

const Store = () => {
  const { id } = useParams()
  const { store, setStore } = useContext(ShopMaqoaContext)

  const handleFetchStore = async (id) => {
    try {
      const res = await fetchStoreById(id)
      await setStore(res)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    handleFetchStore(id)
  }, [])
  console.log(store)

  if (!store) {
    return <div>Loading...</div>
  }

  return (
    <LayoutStore>
      <div className="flex w-full justify-center items-center ">
          <figure className="w-full overflow-hidden flex items-center justify-center min-h-[20rem]">
            <img
              src={store.images.banner}
              alt={store.name}
              className="w-full"
            />
          </figure>
      </div>
      <div className="flex items-start gap-4 w-full max-w-[900px]">
        <div className="relative w-[6rem] h-[6rem]">
          <figure className="absolute -top-12 -left-40 shadow-top-bottom bg-white w-[15rem] h-[15rem] rounded-full overflow-hidden flex items-center justify-start">
            <img className="w-full object-cover " src={store.images.logo} alt="" />
          </figure>
        </div>
        <div>
          <h1 className="font-bold text-[2.2rem]">{store.name}</h1>
          <p className="w-full max-w-[600px]">
            {store.description}
          </p>
        </div>
      </div>
      <h2 className="mt-24 font-extrabold text-[2.1rem]">Catalogue</h2>
      <ProductstUlShop products={store.productsList} />
      {/* <div className="mt-16 text-center w-[250px] ">
        <figure className="w-full border rounded">
          <img className="w-full max-w-[250px] rounded-sm" src="https://i.pinimg.com/736x/1e/da/07/1eda0712f753729ad90193ce2a138f0e.jpg" alt="" />
          <figcaption className="font-bold mt-1" >Figcaption de la foto</figcaption>
          <p className="text-start p-2">categori: saraza</p>
          <h3 className="text-start px-2 font-bold">titulo</h3>
          <p className="text-start px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> In tenetur accusamus facilis reiciendis sunt vitae autem repellat quidem, hic commodi! Iusto, sit voluptatibus?</p>
          <div className="flex gap-3 justify-center mt-2">
            <button className="mb-2 w-full max-w-[60px] p-1 bg-black rounded text-white transition  self-end border border-transparent hover:bg-white hover:border-black hover:text-black">Button</button>
            <button className="mb-2 w-full max-w-[60px] p-1 bg-black rounded text-white transition  self-end border border-transparent hover:bg-white hover:border-black hover:text-black">🧡</button>
          </div>
        </figure>
      </div> */}
    </LayoutStore>
  );
};

export default Store;
