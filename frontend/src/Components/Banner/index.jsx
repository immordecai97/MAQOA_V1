import "./style.css"
const Banner = () => {
  return (
    
      <section className=" flex items-center justify-center  h-[25rem] w-full p-3 m-3 shadow-top-bottom">
        <div className="flex flex-col  w-[800px] p-3 gap-4">
          <h2 className="text-5xl font-extrabold">
            Download Our Mobile <span>App</span> !
          </h2>
          <p className="text-lg">Experience our website on the go with our mobile app. <br /> Browse, shop, and stay updated effortlessly. <br /> Download now and take best of our site with you!</p>
          <div className="flex gap-3">
            <button className="bg-black text-white py-2 px-4 rounded border border-transparent hover:bg-white hover:border-black hover:text-black transition " >App store</button>
            <button className="bg-black text-white py-2 px-4 rounded border border-transparent hover:bg-white hover:border-black hover:text-black transition ">Play store</button>
          </div>
        </div>
        <figure className="flex justify-center items-center">
          <img
            className="w-full max-w-[250px] scale-150 "
            src="./../../public/images/phone.png"
            alt=""
          />
        </figure>
      </section>
  );
};

export default Banner;
