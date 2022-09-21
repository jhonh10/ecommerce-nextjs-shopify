import { useContext, useState } from 'react';
import Link from 'next/link';
import { CartContext } from '../../contexts/CartContext';
import CurrencyFormat from 'react-currency-format';


export default function ProductItem({ product }) {

    const price = product.node.variants.edges[1]?.node.price || product.node.variants.edges[0]?.node.price
    const image1 = product.node.images.edges[0]?.node.transformedSrc
    const image2 = product.node.images.edges[1]?.node.transformedSrc
    const slug = product.node.handle

    const [descuento] = useState(true);
    const [hotSale] = useState(true)
    // const { addProduct, cartItems, increase } = useContext(CartContext);


    /*const isInCart = product => {
        return !!cartItems.find(item => item.id === product.node.id);
    }
*/
    return (
        <div className="col-lg-3 col-md-4  col-6">
            <div className="product-grid">
                <div className="product-image">
                    <img className="pic-1" src={image1} alt="" />
                    <Link href={`product/${slug}`} >
                        {image2 ?
                            <img className="pic-2" src={image2} alt="" />
                            :
                            <img className="pic-2" src={image1} alt="" />
                        }
                    </Link>
                    {hotSale && (<span className="product-trend-label" role="img" aria-label="">🔥hot</span>)}
                    {descuento && (<span className="product-discount-label">-20%</span>)}        
                </div>
                <div className="product-content">
                    <h3 className="title"><Link href={`product/${slug}`}><a>{product.node.title}</a></Link></h3>
                    <CurrencyFormat
                        renderText={(value) => (
                            <div className="price discount"><span>$17.000</span> {`${value}`}</div>
                        )}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        value={price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />
                </div>
            </div>
        </div >
    );
}
