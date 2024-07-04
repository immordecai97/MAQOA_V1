import LayoutStore from "../../Components/LayoutStore";
import "./style.css";
const Store = () => {
  return (
    <LayoutStore>
      <div className="flex w-full justify-center items-center ">
        <div className="w-full max-w-[1366px] relative h-[325px]">
          <figure className="h-[325px] bg-yellow-500 border border-red-700 w-full ">
            <img
              src="./../../public/images/maqoa.png"
              alt=" "
              className="w-full max-w-[450px]"
            />
          </figure>
        </div>
      </div>
      <div className="flex items-start gap-4 w-full max-w-[900px]">
        <div className="relative w-[6rem] h-[6rem]">
            <figure className="absolute -top-12 -left-40 shadow-top-bottom border bg-white border-red-700 w-[15rem] h-[15rem] rounded-full overflow-hidden flex items-center justify-start">
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
    </LayoutStore>
  );
};

export default Store;
