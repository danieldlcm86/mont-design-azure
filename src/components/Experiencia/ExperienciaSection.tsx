import "./experience.css";
import { Link } from "react-router";


export default function ExperienceSection() {
    return (
        <section className="experience-section">
            <div className="experience-overlay">
                <div className="experience-content">
                    <h2>Experiencia y Legado</h2>
                    <p>
                        Más de 70 años creando muebles que cuentan historias en Tabasco,
                        fusionando tradición y modernidad.
                    </p>
                    <Link to="/#" className="btn-conocenos">
                        Conócenos
                    </Link>
                </div>
            </div>
        </section>
    );
}
