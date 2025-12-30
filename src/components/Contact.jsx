import "./Contact.css";

function Contact() {
	return (
		<section id="contact" className="seccion contact">
			<h2>Contacto</h2>
			<p className="contact__text">Si quieres conversar sobre cómo puedo aportar a tu equipo o iniciativa, estoy atenta a tu mensaje.</p>
			<div className="contact__actions">
				<a
					className="contact__btn"
					href="https://mail.google.com/mail/?view=cm&to=yamilet.caituiro@gmail.com&su=Hola%20Yamilet&body=Hola%20Yamilet,%20me%20interesa%20contactarte..."
					target="_blank"
					rel="noopener noreferrer"
				>
					Enviar email
				</a>
				<a className="contact__btn contact__btn--outline" href="https://www.linkedin.com/in/yamilet-caituiro-2b2924370/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			</div>
		</section>
	);
}

export default Contact;
