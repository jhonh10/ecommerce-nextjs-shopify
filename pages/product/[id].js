
import { getSingleProductQuery, graphQLClient } from '../../services/getProducts'
import Layout from "../../components/Layout";
import ProductSlider from '../../components/ProductSlider';
import ProductSummary from '../../components/ProductSummary';




export default function ProductDetails({ data }) {
    const { product } = data
    const {variants, images} = product

    console.log(data)

    return (
        <Layout title={product.title} description={product.description}>
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="product">
                            <div className="row mb-5">
                                <div className="col-lg-6 col-md-7 col-12 position-relative jas_thumbs_img">
                                    <div className="single-product-thumbnail position-relative right bc_jas-p-item">
                                        <ProductSlider images={images.edges} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5 col-12 ">
                                    <div className="summary entry-summary">
                                        <ProductSummary
                                            title={product.title}
                                            description={product.description}
                                            variants={variants.edges}
                                            hasOnlyDefaultVariant={product.hasOnlyDefaultVariant}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { params } = context
    const { id } = params

    const res = await graphQLClient.request(getSingleProductQuery(id))
    if (!res.productByHandle) {
        return {
            redirect: {
                permanent: true,
                destination: '404',
            },
        }
    }

    if (res.errors) {
        console.log(JSON.stringify(res.errors, null, 2));
        throw Error("Unable to retrieve Shopify Product. Please check logs");
    }
    return {
        props: {
            data: {
                product: res.productByHandle,
            }
        }
    }
}