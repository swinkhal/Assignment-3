import React from "react";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
// import productsData from "../../data/products.json";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import "./productDetails.css";
import SpecsTable from "../../components/SpecsTable";
import { productsApi } from "./services/products-api";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const [currentProduct, setCurrentProduct] = React.useState([]);
  React.useEffect(() => {
    productsApi
      .getProduct(id)
      .then((res) => {
        console.log(res);
        setCurrentProduct(() => res?.data?.product || {});
      })
      .catch((err) => {
        console.log("While fetching the product -->", err);
      });
  }, []);

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Box className="product-details">
        <img
          src={currentProduct.productImage}
          alt="product-img"
          className="product-image"
        />

        <Box className="details-content">
          <Typography
            gutterBottom
            variant="text"
            component="div"
            className="product-name"
          >
            {currentProduct.productName}
          </Typography>
          <Box className="buy">
            <Typography gutterBottom variant="h5" component="div">
              Seller
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ m: "auto" }}
            >
              ${currentProduct.productPrice}
            </Typography>
            <Button variant="contained">Buy</Button>
          </Box>
          <Typography variant="body1" color="text.secondary">
            {currentProduct.productDetails}
          </Typography>
          <SpecsTable />
        </Box>
      </Box>
    </Container>
  );
}
