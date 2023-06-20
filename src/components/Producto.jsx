import React from "react";
import reloj1 from "../assets/img/reloj1.jpg";
import reloj2 from "../assets/img/reloj2.jpg";
import reloj3 from "../assets/img/reloj3.jpg";
import reloj4 from "../assets/img/reloj4.jpg";
function Producto(params) {
      return (
            <main class="productos">
                  <h2 id="productos">Nuestros servicios</h2>
                  <article>
                        <img src={reloj1} alt="Reloj" />
                        <h2>INTEGRACIÓN DE TODOS SUS DOCUMENTOS DIGITALES Y EN PAPEL</h2>
                        <p>
                        Toda la documentación de su empresa tanto la fisica (papeles) como la documentacion digital puede integrarse en un único repositorio con accesibilidad por parte de toda su empresa o las personas designadas a través de usuario y contraseña.
                        Nuestra plataforma permite modelar cualquier lógica documental de negocio.
                        </p>
                        <button>Consulta más info</button>
                  </article>
                  <article>
                        <img src={reloj2} alt="Reloj" />
                        <h2>GESTIÓN DE PROYECTOS</h2>
                        <p>
                        Relevamiento sobre requisitos y necesidades del cliente para la ejecución del proyecto, clasificación,loteo y codificación de expedientes, cajas, archivos etc.
                        Asesoría
                        Seguridad y confidencialidad
                        Alquiler de equipos
                        Destrucción de Documentos
                        </p>
                        <button>Consulta más info</button>
                  </article>
                  <article>
                        <img src={reloj3} alt="Reloj" />
                        <h2>FORMATOS DE IMAGENES</h2>
                        <p>
                        PDF(Portable Document Format) Imágenes e imágenes sobre texto
                        TIF y TIFF G4 de alta compresión
                        JPG y JPEG 2000
                        Documento de texto
                        Documento HTML y XML
                        Expediente de Base de Datos (CVS y DBF)
                        </p>
                        <button>Consulta más info</button>
                  </article>
                  <article>
                        <img src={reloj4} alt="Reloj" />
                        <h2>CONVERSIÓN DE IMAGEN A TEXTO</h2>
                        <p>
                        Procesamiento de OCR (Recononocimiento Óptico de Caracteres)
                        Reconocimiento de texto mejorado, Indexación del texto producto del OCR para fácil localización en las imágenes.
                        </p>
                        <button>Consulta más info</button>
                  </article>
                  <article>
                        <img src={reloj4} alt="Reloj" />
                        <h2>EQUIPO DE TRABAJO</h2>
                        <p>
                        Lider de proyecto
                        Equipo para la preparación de los Documentos
                        Notebook y Equipos Portatiles de Captura de Imágenes
                        Equipo de rearmado de Expedientes
                        Equipo de Indexación y captura de Datos
                        Especialista en Gestión de la información
                        </p>
                        <button>Consulta más info</button>
                  </article>
                  <article>
                        <img src={reloj4} alt="Reloj" />
                        <h2>ENTREGABLES</h2>
                        <p>
                        Almacenamiento de entregas en (CD, DVD, Pendrive, disco externo, etc)
                        Acceso web y alojamiento en nuestros Servidores
                        Gestión de Datos Corporativa a través de TERADOC Plataforma de Gestión Documental                        </p>
                        <button>Consulta más info</button>
                  </article>
            </main>
      );
}
export default Producto;
