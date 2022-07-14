import { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import ProductVariants from '../ProductVariants'
import ProductActions from '../ProductActions'



export default function ProductSummary({ title, description, variants, hasOnlyDefaultVariant }) {

    const defaultVariant = variants.filter(variant => variant.node.availableForSale)

    const [variant, setVariant] = useState({
        id: defaultVariant[0].node.id,
        availableForSale: defaultVariant[0].node.availableForSale,
        title,
        description,
        price: defaultVariant[0].node.price,
        size: defaultVariant[0].node.title,
        inventoryQuantity: defaultVariant[0].node.inventoryQuantity,
        quantity: 1
    })

    return (
        <>
            <h1 className="product_title entry-title">{variant.title} {!variant.availableForSale && <span>Agotado</span>}</h1>
            <p className="price productPrice">
                <del id="old-product-price">$62.000,00</del>
                <CurrencyFormat
                    renderText={(value) => (
                        <ins id="poduct-price">{`${value}`}</ins>
                    )}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    value={variant.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
                <span className="onsale fs__14 tu dib cw pr_onsale"><span>-20%</span></span>
            </p>
            <div className="Shopify-product-details__short-description">
                <p className="p_des_ex mg__0">{variant.description}</p>
            </div>
            <div className="variants">
                {!hasOnlyDefaultVariant &&
                    <div className="variations variant_square">
                        <ProductVariants variants={variants} variant={variant} setVariant={setVariant} />
                    </div>
                }
            </div>
            <div className="variant_quantity">
                <ProductActions inventoryQuantity={variant.inventoryQuantity} variant={variant} setVariant={setVariant} hasOnlyDefaultVariant />
            </div>
        </>
    )
}
