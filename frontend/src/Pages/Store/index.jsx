import LayoutStore from "../../Components/LayoutStore";
import "./style.css";
const Store = () => {
  return (
    <LayoutStore>
      <div className="flex w-full justify-center items-center ">
        <div className="w-full max-w-[1366px] relative h-[325px]">
          <figure className="h-[325px] bg-yellow-500 border border-red-700 w-full ">
            <img
              src="/images/maqoa.png"
              alt=" "
              className="w-full max-w-[450px]"
            />
          </figure>
        </div>
      </div>
      <div className="flex items-start gap-4 w-full max-w-[900px]">
        <div className="relative w-[6rem] h-[6rem]">
            <figure className="absolute -top-12 -left-40 shadow-top-bottom bg-white w-[15rem] h-[15rem] rounded-full overflow-hidden flex items-center justify-start">
            <img  className="w-full object-cover " src="https://i.pinimg.com/564x/d8/d3/46/d8d34638bc587b2dbc279ecffd4acc12.jpg" alt=""/>
            </figure>
        </div>
        <div>
          <h1 className="font-bold text-[2.2rem]">Pizza Bay</h1>
          <p className="w-full max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab,
            vero consequuntur praesentium possimus officia molestias, quod earum
            sunt eligendi adipisci a quaerat iste enim non aspernatur in
            voluptas soluta!
          </p>
        </div>
      </div>
        <h2 className="mt-24 font-extrabold text-[2.1rem]">Catalogue</h2>
      <div className="mt-16 text-center w-[250px] ">
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
      </div>
    </LayoutStore>
  );
};

export default Store;
