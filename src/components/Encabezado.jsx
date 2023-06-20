import React from "react";
import logo from "../assets/img/logo.png";
function Encanezado() {
      return (
            <header class="encabezado">
                  <nav id="logo">
                        <a href="#">
                              <img src={logo} alt="Logo Punto 21 Digital" />
                        </a>
                  </nav>
                  <nav id="opciones">
                        <ul>
                              <li>
                                    <a href="#">Inicio</a>
                              </li>
                              <li>
                                    <a href="#">Nosotros</a>
                              </li>
                              <li>
                                    <a href="#productos">Productos</a>
                              </li>
                              <li>
                                    <a href="#contacto">Contacto</a>
                              </li>
                        </ul>
                  </nav>
            </header>
      );
}
export default Encanezado;
