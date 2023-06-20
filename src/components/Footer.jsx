import React from "react";
import logo from "../assets/img/logo.png";

function Footer() {
      return (
            <footer class="pie">
                  <nav id="logo">
                        <a href="#">
                              <img src={logo} alt="Logo Punto 21 Digital" />
                        </a>
                  </nav>
                  <nav id="opciones">
                        <ul>
                              <li>
                                    <a href="#">punto21digital@gmail.com</a>
                              </li>
                              <li>
                                    <a href="#">11-5961-8593</a>
                              </li>
                        </ul>
                  </nav>
            </footer>
      );
}

export default Footer;
