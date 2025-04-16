import './hero.css'

export default function HeroSection() {
    return(
        // Se muestra un fondo de video
        <section className="video-cover">
            <video className="video-cover" autoPlay muted loop playsInline>
                <source src="/banners/banner03.mp4" type="video/mp4" />
                Tu navegador no soporta reproducción de videos.
            </video>
            <div className="video-content">
                <h1 className='title'>Mont Design</h1>
                <img src="/logos/Isotipo-transparent.png" alt="logo" />
                <p>El lujo y diseño se vuelven realidad</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/CarpMontejoP" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/montdesign.carp" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a> */}
                </div>
            </div>
        </section>
    )
}