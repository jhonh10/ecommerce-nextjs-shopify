import { getProductsQuery, graphQLClient } from '../services/getProducts';
import Layout from '../components/Layout';
import ProductsGrid from '../components/ProductsGrid'


export default function Home({ title, products }) {
  return (
    <Layout title={title} description="This is the Store page" >
      <div >
        <div className="text-center mt-5">
          <h1>Productos</h1>
          <p>Ultima Coleccion Para Ti.</p>
        </div>
        <ProductsGrid products={products} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {

  const res = await graphQLClient.request(getProductsQuery);

  if (res.errors) {
    console.log(JSON.stringify(res.errors, null, 2));
    throw Error("Unable to retrieve Shopify Products. Please check logs");
  }

  return {
    props: {
      title: res.shop.name,
      products: res.products.edges
    },
  };
}

