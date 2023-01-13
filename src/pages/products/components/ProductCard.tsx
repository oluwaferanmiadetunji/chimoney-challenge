import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ProductType } from "types/product.types";
import Grid from "@mui/material/Grid";
import styles from "./styles";
import { shortenProductName } from "utils/helpers";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import ProductContext from "context/ProductContext";

const ProductCard = ({ product }: { product: ProductType }) => {
  const { addProductToCart } = useContext(ProductContext);

  return (
    <Grid item xs={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.img}
            alt={product.productName}
          />

          <CardContent>
            <Typography sx={styles.productName} gutterBottom>
              {shortenProductName(product.productName)}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions sx={styles.cardActions}>
          <IconButton onClick={() => addProductToCart(product)}>
            <AddShoppingCartIcon color="error" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
