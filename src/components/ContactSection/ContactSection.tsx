import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const form = useRef<HTMLFormElement>(null);
    const [sent, setSent] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
        // Envío a MontDesign (nuevo)
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_MONTDESIGN, // Template con notificación
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setSent(true);
                    form.current?.reset();
                },
                (error) => {
                    console.error("Error al enviar:", error);
                }
            );
    };

    return (
        <section className="contact-section" id="contacto">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contáctanos</h2>
                    <p>¿Tienes un proyecto en mente o deseas más información?</p>
                    <ul>
                        <li><strong>📍 Dirección:</strong> <a href="https://maps.app.goo.gl/mVqyXYPvpaf7Wmvq5" target="_blank">Faisán esq. Pelícano, Parrilla, Centro, Tabasco. CP. 86030</a></li>
                        <li><strong>📞 Teléfono:</strong> <a href="tel:+529932111311">+52 993 211 1311</a></li>
                        <li><strong>📧 Email:</strong> <a href="mailto:montdesign.carpinteria@gmail.com">montdesign.carpinteria@gmail.com</a></li>
                        <li>
                            <i className="fab fa-whatsapp fa-xl" style={{ color: "#25D366", marginRight: "8px" }}></i>
                            <strong>WhatsApp: </strong>
                            <a href="https://wa.me/529932111311?text=Hola%20Mont%20Design%2C%20estoy%20interesado%20en%20sus%20muebles.%20¿Me%20podrían%20dar%20más%20información%3F" target="_blank">
                                Contáctanos.
                            </a>
                        </li>
                    </ul>
                </div>

                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Nombre" required />
                    <input type="email" name="email" placeholder="Correo electrónico" required />
                    <input type="phone" name="phone" placeholder="Número telefónico" required />
                    <textarea name="mensaje" rows={5} placeholder="Escribe tu mensaje" required />
                    <button type="submit">Enviar mensaje</button>
                    {sent && <p className="success-message">✅ ¡Mensaje enviado!</p>}
                </form>
            </div>

        </section>
    );
}
