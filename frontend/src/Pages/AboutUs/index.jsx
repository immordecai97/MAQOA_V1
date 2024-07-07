import Layout from "../../Components/Layout";
import { IconPalette,IconShirt,IconWorld } from '@tabler/icons-react';
const AboutUs = ()=>{
    return(
        <Layout title="Abouts">
            <section className="flex flex-col justify-center border rounded-lg shadow-lg w-full max-w-[1200px] items-center">
                <article className="flex flex-nowrap w-full max-w-4xl  items-center gap-3 text-start my-3">
                    <p className="text-[1.06rem] mb-2">Welcome to <strong>MAQOA</strong>, a pioneering marketplace platform for print-on-demand products in the United States and Canada. <br /> Our mission is to empower talented graphic designers from Latin America by providing them with the opportunity to showcase their exclusive designs and establish their own e-commerce stores within the <strong>MAQOA</strong> platform.</p>
                </article>
                <article className="flex flex-wrap flex-row w-full max-w-4xl justify-around items-center text-start border rounded-lg p-3 shadow-sm">
                    <h2 className="font-bold mt-2 text-center w-full text-[1.7rem]">Our Mission</h2>
                    <div>
                    <p className="w-[550px] text-[1.06rem]">
                    At <strong>MAQOA</strong>, we believe in the power of creativity and the importance of supporting emerging artists. Our mission is to provide a platform where Latin American graphic designers can launch their businesses without any financial investment.
                    </p>
                    <p className="w-[550px] text-[1.06rem]">
                    By partnering with <strong>MAQOA</strong>, these designers gain access to the international market, starting with the United States and Canada, with plans for future expansion into Europe.
                    </p>
                    </div>
                    <img className=" w-full max-w-[200px] scale-125 mb-3" src="/images/Designer-life-bro.png" alt="" />
                </article>
                <article className="flex flex-wrap w-full max-w-4xl  items-center gap-3 text-start my-3">
                    <h2 className="font-bold mt-2 text-center w-full text-[1.7rem]">Our Vision</h2>
                    <p className="text-[1.06rem]">Our vision is to create a vibrant and diverse community of designers and customers, where unique and high-quality print-on-demand products are just a click away. We are committed to:</p>
                    <ul className="flex  justify-evenly gap-4 mx-auto mt-7 mb-7">
                        <li className="w-64 border p-3 shadow rounded-lg">
                            <IconPalette stroke={2} className="text-center mx-auto"/>
                            <h3 className="text-center font-bold">Supporting Talent</h3>
                            <p className="text-start text-[1.06rem]">Offering a platform for designers to turn their creative passions into thriving businesses.</p>
                        </li>
                        <li className="w-64 border p-3 shadow rounded-lg">
                        <IconShirt stroke={2} className="text-center mx-auto"/>
                        <h3 className="text-center font-bold">Quality Products </h3>
                        <p className="text-start text-[1.06rem]">Ensuring that every item sold on MAQOA meets the highest standards of quality and craftsmanship.</p>
                        </li>
                        <li className="w-64 border p-3 shadow rounded-lg">
                        <IconWorld stroke={2} className="text-center mx-auto"/>
                        <h3 className="text-center font-bold">Global Reach</h3>
                        <p className="text-start text-[1.06rem]">Expanding our marketplace to new regions, allowing more designers to reach international audiences.</p>
                        </li>
                    </ul>
                </article>
                <article className="flex flex-wrap w-full max-w-4xl items-center justify-center gap-4 my-2 mb-8">
                    <h2 className="font-bold text-center w-full text-[1.7rem] mb-2">Why MAQOA?</h2>
                    <div className="flex flex-col  gap-4 mx-auto w-[400px] h-[325px] border p-2 rounded-lg">
                        <h3 className="w-full font-bold text-center ">For Designers</h3>
                        <ul className="flex flex-col gap-3">
                            <li className="border rounded-lg shadow"><p className="text-start m-2"><strong>No Initial Investment</strong>: Start your e-commerce store without spending a dime.</p></li>
                            <li className="border rounded-lg shadow"><p className="text-start m-2"><strong>Exclusive Storefronts</strong>: Create a unique store with your brand and exclusive designs.</p></li>
                            <li className="border rounded-lg shadow"><p className="text-start m-2"><strong>International Exposure</strong>: Reach customers in the United States and Canada, with plans to expand to Europe.</p></li>
                        </ul>
                    </div>
                    <div className="flex flex-col  gap-4 mx-auto  w-[400px] h-[325px] border p-2 rounded-lg">
                        <h3 className="w-full font-bold text-center ">For Customers</h3>
                        <ul className="">
                            <li><strong>Unique Products</strong>: Discover exclusive designs and high-quality print-on-demand items.</li>
                            <li><strong>Support Artists</strong>: Every purchase supports a talented graphic designer from Latin America.</li>
                            <li><strong>Secure Shopping</strong>: Enjoy a seamless and secure shopping experience.</li>
                        </ul>
                    </div>
                </article>
            </section>

        </Layout>
    )

}

export default AboutUs