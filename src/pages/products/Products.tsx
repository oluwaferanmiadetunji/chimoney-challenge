import { useContext } from "react";
import Layout from "components/layout";
import Grid from "@mui/material/Grid";
import ProductCard from "./components/ProductCard";
import ProductContext from "context/ProductContext";

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <Layout>
      <Grid container spacing={6}>
        {products.map((product) => (
          <ProductCard product={product} key={product.productId} />
        ))}
      </Grid>
    </Layout>
  );
};

export default Products;
