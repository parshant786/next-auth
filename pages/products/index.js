import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>product list</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            {product.name}and{product.price}
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
    revalidate: 5,
  };
};
