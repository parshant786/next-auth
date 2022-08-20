import React from "react";

const ProductById = ({ product }) => {
  return (
    <div>
      {product.name} and {product.price}
    </div>
  );
};

export default ProductById;
export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { productById: "1" },
      },
    ],
    fallback: "blocking",
  };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/products/${params.productById}`);
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  console.log(data);
  return {
    props: {
      product: data,
    },
  };
};
