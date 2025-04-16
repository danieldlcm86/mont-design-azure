import CardsSection from '../CardsSection/CardSection'
import './section1.css'

export default function Section1() {
    return (
    <section className='section1' id='diseños'>
        <div className='container'>
            <div className="header">
                <div className="header-title">
                    <h2>Nuestros Diseños</h2>
                    <div className='line-blue'></div>
                </div>
                <p className="header-p">Modernidad, Elegancia y Calidad</p>
            </div>
            <div className="cards">
                <CardsSection />
            </div>
        </div>
    </section>
    )
}