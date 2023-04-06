import { Container, Grid } from "@mui/material";
import React from "react";
import ProductTabs from "../../components/ProductTabs";
import ProductCard from "../../components/ProductCard";
// import productsData from "../../data/smartphones.json";
import "./products.css";
import CarouselComponent from "../../components/Carousel";
import { productsApi } from "./services/products-api";
import { useLocation } from "react-router-dom";


function ProductCategory({}) {
  const location = useLocation();
  const [productsData, setProductsData] = React.useState([]);
  const [category, setCategory] = React.useState("");

  React.useEffect(() => {

    let productCategory = "";

    if (location.pathname.includes("phones")) productCategory = "smartphone";
    else if (location.pathname.includes("laptop")) productCategory = "laptop";
    else if (location.pathname.includes("camera")) productCategory = "camera";
    else if (location.pathname.includes("headphone"))
      productCategory = "headphone";
    else if (location.pathname.includes("gamingconsole"))
      productCategory = "gamingconsole";
    else if (location.pathname.includes("television"))
      productCategory = "television";
    else if (location.pathname.includes("desktop"))
      productCategory = "desktop";
    else if (location.pathname.includes("accessories"))
      productCategory = "accessories";

    setCategory(productCategory);
    
    productsApi
      .getProductsByCategory(productCategory)
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

export default ProductCategory;
