import { toNumber } from "lodash"
import { ToastContainer, toast } from 'react-toastify'
import { useCart } from 'react-use-cart'


export default function ProductActions({ variant, setVariant, inventoryQuantity, hasOnlyDefaultVariant }) {

    const { addItem } = useCart();

    const handleAddToCart = variant => {
        if (variant.quantity < variant.inventoryQuantity) {
            addItem(variant, variant.quantity)
            setVariant({ ...variant, quantity: 1 })
        } else {
            toast(`En el carrito no puedes agregar mas ${variant.title} - ${variant.size} `)
            setVariant({ ...variant, quantity: 1 })
        }
    }

    const handleVariant = e => {
        setVariant({ ...variant, quantity: toNumber(e) })
    }
    return (
        <div className="actions">
            <div className="quantity">
                {inventoryQuantity > 0 && (
                    <input type="number"
                        value={variant.quantity}
                        min={1}
                        max={inventoryQuantity}
                        onChange={() => handleVariant(event.target.value)}
                    />
                )
                }
            </div>
            <div className="buttons">
                {variant.availableForSale ?
                    <button onClick={() => handleAddToCart(variant)}>AÑADIR AL CARRITO </button>
                    :
                    <button disabled>AGOTADO </button>
                }
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme={"dark"}
                />
            </div>
        </div>
    )
}
