import Carousel from "react-material-ui-carousel";
import '../views/products/products.css'

function CarouselComponent() {
  const images = [
    "https://thumbs.dreamstime.com/b/vinnytsia-ukraine-september-vector-banner-iphone-vector-illustration-app-web-presentation-design-vector-banner-iphone-230042240.jpg",
    "https://dlcdnwebimgs.asus.com/gain/61E66D12-AD75-475E-A70D-37169A60BDF0/fwebp",
    "https://www.cliftoncameras.co.uk/uploads/Shop%20Page/Sony/sony-a7-IV-banner.jpg",
  ];
  return (
    <>
      <div >
        <Carousel
          autoPlay={true}
          indicators={true}
          className="carousel"
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
        >
          {images.map((item, i) => (
            <img
              key={i}
              src={item}
              alt="carousel-img"
              className="c-image"
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}
export default CarouselComponent;
