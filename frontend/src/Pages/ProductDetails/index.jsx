import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ShopMaqoaContext } from './../../Context';
import Layout from './../../Components/Layout';
import CardProductDetail from '../../Components/CardProductDetail';
import { Link } from 'react-router-dom';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

const ProductDetails = () => {
  const { id } = useParams();
  const { product, fetchProductById } = useContext(ShopMaqoaContext);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductByID = async () => {
      // setLoading(true);
      setError(null);
      try {
        await fetchProductById(id);
      } catch (error) {
        setError(error.message);
      } finally {
        // setLoading(false);
      }
    };

    getProductByID();
  }, [id]);

  // if (loading) {
  //   return <div>Cargando...</div>;
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <Layout>
      {/* TÍTULO */}
      <h1 className="text-4xl font-bold mb-8">Product details</h1>

      {/* DATOS DE LA TIENDA */}
      <div className="w-full mt-8 px-32 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <figure className="rounded-full overflow-hidden w-[5rem] h-[5rem] flex justify-center items-center">
            <img src="https://i.pinimg.com/736x/2b/58/d9/2b58d965cdee09c70ed00924a162c6b2.jpg" alt="Shazi" className='w-full transition hover:scale-150  h-full object-cover' />
          </figure>
          <h2 className="font-bold">Shazi</h2>
        </div>
        <Link to='/'>
          <ArrowLeftCircleIcon className='text-black w-[2.5rem]' />
        </Link>
      </div>

      {/* CARD DE DETALLES DEL PRODUCTO */}
      <CardProductDetail
        image={product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/300x300.png?text=No+Image'}
        title={product.title}
        description={product.description}
        price={product.price}
        categories={product.categories}
      />
    </Layout>
  );
};

export default ProductDetails;
