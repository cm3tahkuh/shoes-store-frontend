import Products from "./components/product/Products/Products";
import About from "./components/main/About/About";
import Carousel from "./components/main/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <About />
      <Carousel />
      <Products />
    </>
  );
}
