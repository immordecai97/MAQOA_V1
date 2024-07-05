import Layout from "../../Components/Layout";
import { IconPalette,IconShirt,IconWorld } from '@tabler/icons-react';
const AboutUs = ()=>{
    return(
        <Layout title="Abouts">
            <section className="flex flex-col justify-center">
                <article className="flex flex-nowrap w-full max-w-4xl  items-center gap-3 text-start">
                    <p className="text-[1.06rem]">Welcome to <strong>**MAQOA**</strong>, a pioneering marketplace platform for print-on-demand products in the United States and Canada. <br /> Our mission is to empower talented graphic designers from Latin America by providing them with the opportunity to showcase their exclusive designs and establish their own e-commerce stores within the <strong>MAQOA</strong> platform.</p>
                </article>
                <article className="flex flex-wrap flex-row w-full max-w-4xl justify-around items-center text-start">
                    <h2 className="font-bold mt-4 text-center w-full">Our Mission</h2>
                    <div>
                    <p className="w-[550px]">
                    At <strong>MAQOA</strong>, we believe in the power of creativity and the importance of supporting emerging artists. Our mission is to provide a platform where Latin American graphic designers can launch their businesses without any financial investment.
                    </p>
                    <p className="w-[550px]">
                    By partnering with <strong>MAQOA</strong>, these designers gain access to the international market, starting with the United States and Canada, with plans for future expansion into Europe.
                    </p>
                    </div>
                    <img className="bg-black w-full max-w-[160px]" src="/images/maqoa.iso.png" alt="" />
                </article>
                <article className="flex flex-wrap w-full max-w-4xl  items-center gap-3 text-start">
                    <h2 className="font-bold mt-4 text-center w-full">Our Vision</h2>
                    <p className="text-[1.06rem]">Our vision is to create a vibrant and diverse community of designers and customers, where unique and high-quality print-on-demand products are just a click away. We are committed to:</p>
                    <ul className="flex  justify-evenly gap-4 mx-auto mt-7">
                        <li className="w-64 border p-3 shadow">
                            <IconPalette stroke={2} className="text-center mx-auto"/>
                            <h3 className="text-center font-bold">Supporting Talent</h3>
                            <p className="text-start">Offering a platform for designers to turn their creative passions into thriving businesses.</p>
                        </li>
                        <li className="w-64 border p-3 shadow">
                        <IconShirt stroke={2} className="text-center mx-auto"/>
                        <h3 className="text-center font-bold">Quality Products </h3>
                        <p className="text-start">Ensuring that every item sold on MAQOA meets the highest standards of quality and craftsmanship.</p>
                        </li>
                        <li className="w-64 border p-3 shadow">
                        <IconWorld stroke={2} className="text-center mx-auto"/>
                        <h3 className="text-center font-bold">Global Reach</h3>
                        <p className="text-start">Expanding our marketplace to new regions, allowing more designers to reach international audiences.</p>
                        </li>
                    </ul>
                </article>

            </section>

        </Layout>
    )

}

export default AboutUs