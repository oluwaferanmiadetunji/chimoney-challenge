import { useContext } from "react";
import Layout from "components/layout";
import Grid from "@mui/material/Grid";
import ProductCard from "./components/ProductCard";
import ProductContext from "context/ProductContext";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import Loader from "./components/Loader";

const Products = () => {
  const { products, loading } = useContext(ProductContext);

  return (
    <Layout>
      <Typography variant="h1" sx={styles.header} gutterBottom>
        Products
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={6}>
          {products.map((product) => (
            <ProductCard product={product} key={product.productId} />
          ))}
        </Grid>
      )}
    </Layout>
  );
};

export default Products;
