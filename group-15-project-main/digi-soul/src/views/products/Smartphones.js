import { Container, Grid } from "@mui/material";
import React from "react";
import ProductTabs from "../../components/ProductTabs";
import ProductCard from "../../components/ProductCard";
import productsData from "../../data/smartphones.json";
import "./products.css";
import CarouselComponent from "../../components/Carousel";

function Smartphones() {
  return (
    <Container sx={{ marginTop: "25px" }}>
      <CarouselComponent />
      <Container maxWidth="l" sx={{ display: "flex", alignItems: "center" }}>
        <ProductTabs />
      </Container>
      <Container sx={{ py: 8 }} maxWidth="l">
        <Grid container spacing={8}>
          {productsData.map((e) => (
            <Grid item key={e.productId} xs={12} sm={6} md={4}>
              <ProductCard
                key={e.productId}
                id={e.productId}
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

export default Smartphones;
