import "./nosotros.css";

export default function Nosotros() {
    return (
        <section className="nosotros-hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>Nosotros</h1>
                    <p>
                        Más que una carpintería: una historia de tres generaciones que transforman espacios con diseño, calidad y pasión artesanal.
                    </p>
                </div>
            </div>

            <div className="nosotros-section">
                <div className="nosotros-container">
                    <div className="nosotros-content">
                        <div className="nosotros-text">
                            <h2>Nuestro legado</h2>
                            <p>
                                Con raíces en el apellido Montejo, hemos sido pioneros de la carpintería moderna en Tabasco. Desde nuestros inicios, hemos trabajado con hogares, oficinas, hospitales y hoteles, siempre buscando crear espacios que inspiren.
                            </p>
                            <p>
                                Cada mueble que fabricamos combina tradición, funcionalidad y diseño contemporáneo, hecho a mano con maderas de alta calidad que garantizan durabilidad y elegancia.
                            </p>
                        </div>
                        <div className="nosotros-image">
                            <img src="/banners/legacy-montdesign.png" alt="Taller Mont Design" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
