import ProductItem from '../ProductItem';
//import { ProductsContext } from '../../contexts/ProductsContext';

export default function ProductsGrid({products}) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Productos
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Buscar Productos" className="form-control" id="" />
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    products.map(product =>(
                        <ProductItem key={product.node.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
}
