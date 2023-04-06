import {Container, Grid, Fab } from "@mui/material";
import React from "react";
import ProductCard from "../../components/ProductCard";
// import productsData from "../../data/products.json";
import ProductTabs from "../../components/ProductTabs";
import './products.css';
import CarouselComponent from "../../components/Carousel";
import { productsApi } from "./services/products-api";
import AddIcon from "@mui/icons-material/Add";

function AllProducts() {
    const [productsData, setProductsData] = React.useState([]);
    React.useEffect(() => {
      productsApi
        .getAllProducts()
        .then((res) => {
          setProductsData(() => res?.data?.products || []);
        })
        .catch((err) => {
          console.log("While fetching events-->", err);
        });
    }, []);
  return (
    <Container sx={{ marginTop: "25px" }}>
      <CarouselComponent />
      {/* <Fab href="/addproduct" sx={{float:"right", mb:3}}><AddIcon/></Fab> */}
      <Container maxWidth="l" sx={{ display: "flex", alignItems: "center" }}>
        <ProductTabs />
      </Container>
      <Container sx={{ py: 8 }} maxWidth="l">
        <Grid container spacing={8}>
          {productsData.map((e) => (
            <Grid item key={e.productId} xs={12} sm={6} md={4}>
              <ProductCard
                key={e._id}
                id={e._id}
                category={e.productCategory}
                name={e.productName}
                imgurl={e.productImage}
                price={e.productPrice}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default AllProducts;
