import './footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">

                {/* Columna 1: Logo y descripción */}
                <div className="footer__column">
                    <img src="/logos/Imagotipo-light.png" alt="Logo" className="footer__logo" />
                    <p className="footer__description">
                    Mont Design tiene un legado de tres generaciones en la carpintería. 
                    </p>
                    <p className="footer__description">
                    Nos distinguimos por nuestro enfoque en el diseño moderno, la calidad de los materiales, y la capacidad de ofrecer 
                    soluciones para diferentes tipos de espacios.
                    </p>
                </div>

                {/* Columna 2: Navegación */}
                <div className="footer__column">
                    <h3 className="footer__title">Secciones</h3>
                    <ul className="footer__list">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#nosotros">Sobre Nosotros</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                {/* Columna 3: Contacto */}
                <div className="footer__column">
                    <h3 className="footer__title">Contacto</h3>
                    <ul className="footer__list">
                        <li>Dirección: 
                        <a href="https://maps.app.goo.gl/mVqyXYPvpaf7Wmvq5" target="_blank"> Calle Pelícano esq. faisán. Parrilla, Centro, Tabasco. CP.86030</a></li>
                        <li>Teléfono: <a href="tel:+529932111311">(993) 432 6601</a></li>
                        <li><a href="mailto:montdesign.carpinteria@gmail.com">montdesign.carpinteria@gmail.com</a></li>
                    </ul>
                </div>

            </div>
            <div className='copyright-container'>
                <div className='copyright'>
                    <p className='copyright-font'>Mont Design Carpintería ©. Todos los derechos reservados, {new Date().getFullYear()} </p>
                    <p className='ghost'>Desarrollado por <a href="https://www.linkedin.com/in/danieldlcm86" target="_blank">Daniel Maldonado</a></p>
                </div>
            </div>
        </footer>
    )
}