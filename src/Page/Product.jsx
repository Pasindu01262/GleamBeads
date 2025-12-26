import React, { useContext } from 'react';
import { ShopContext } from '../Contex/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrum/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import DscriptionBox from '../Component/Description_box/DscriptionBox';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct';

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((p) => p.id === Number(productId));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DscriptionBox/>
      <RelatedProduct/>
    </div>
  );
}

export default Product;
