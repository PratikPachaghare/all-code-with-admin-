import React from "react";

import Carousel from "../../components/Carousel";
import AllProductPage from "../../components/AllProductPage";

function Home() {
  return (
    <>
      <div className="">
        <Carousel />
      </div>
      <div className="">
        <AllProductPage />
      </div>
    </>
  );
}

export default Home;
