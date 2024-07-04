import { useContext, useEffect } from 'react';
import HeaderStore from '../../Components/HeaderStore';
import Layout from './../../Components/Layout';
import { useParams } from 'react-router-dom';
import { ShopMaqoaContext } from '../../Context';
import { fetchProductById } from './../../Services/product.service.js'
import CardProductDetail from '../../Components/CardProductDetail';

const ProductDetails = () => {
  const { id } = useParams()
  const { product, setProduct, store, setStore } = useContext(ShopMaqoaContext)
  const handleFetchProductById = async () => {
    try {
      const data = await fetchProductById(id)
      console.log(data)
      setProduct(data)
      setStore(data.productBy)
    } catch (error) {
      console.log('errorrrrrr')
    }
  }
  useEffect(() => {
    handleFetchProductById()
  }, [])

  if (!product) {
    <div>Cargando...</div>
  }

  return (
    <Layout title="Product details">
      <HeaderStore />
      {
        product && <CardProductDetail />
      }
    </Layout>
  )
}

export default ProductDetails




// import CardProductDetail from '../../Components/CardProductDetail';
// import { Link } from 'react-router-dom';
// import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
// const { id } = useParams();
// const [store, setStore] = useState({})
// useEffect(() => {
//   fetchProductById(id).then(res=>{
//     setStore(product.productBy)
//   })
// }, [id]);

// console.log(store)

// if (!product) {
//   return <div>Cargando...</div>;
// }

// return (
//   <Layout>
//     {/* TÍTULO */}
//     <h1 className="text-4xl font-bold mb-8">Product details</h1>



{/* CARD DE DETALLES DEL PRODUCTO */ }
//   <CardProductDetail
//     image={product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/300x300.png?text=No+Image'}
//     title={product.title}
//     description={product.description}
//     price={product.price}
//     categories={product.categories}
//   />
// </Layout>
// );
// };

// export default ProductDetails;