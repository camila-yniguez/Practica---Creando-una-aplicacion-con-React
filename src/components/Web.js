import React from "react";
import Encanezado from "./Encabezado";
import Banner from "./Banner";
import Producto from "./Producto";
import Footer from "./Footer";

function Web() {
      return (
            <div className="container">
                  <Encanezado />
                  <Banner />
                  <Producto />
                  <Footer />
            </div>
      );
}
export default Web;
