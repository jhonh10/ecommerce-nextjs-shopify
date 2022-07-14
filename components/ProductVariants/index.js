

export default function ProductVariants({ variants, variant, setVariant, setQuantity }) {

    const handleVariant = (data) => {
        setVariant({
            ...variant,
            id: data.node.id,
            availableForSale: data.node.availableForSale,
            price: data.node.price,
            size: data.node.title,
            inventoryQuantity: data.node.inventoryQuantity,
            quantity: 1
        });
        //setQuantity(1)
    }
    return (

        <div className="nt_select_pr_0 swatch is-label mb__25" data-option-index="0" id="nt_select_0">
            <h4 className="swatch__title">Opcion Seleccionada: <span className="nt_name_current">{variant.size}</span></h4>
            <ul className="swatches-select swatch__list" data-attribute="pa_talla" data-id="0" data-size="1">
                {variants.map((variant, index) => {
                    return (
                        <li key={index}
                            aria-label={variant.node.title}
                            className="nt-swatch bg_css_s is-selected-none"
                            data-value={variant.node.title}
                            onClick={() => handleVariant(variant)}
                        >
                            {variant.node.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
