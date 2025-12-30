import "./Certification.css";

function Certifications() {
	const certs = [
		"Introducción a la Ciberseguridad",
		"Seguridad de Terminales",
		"Defensa de la red",
		"Gestión de amenazas cibernéticas"
	];

	return (
		<section id="certifications" className="seccion certifications">
			<h2>Certificaciones</h2>
			<div className="certifications__grid">
				{certs.map((cert, idx) => (
					<article key={cert} className="cert-card" style={{ animationDelay: `${0.08 * (idx + 1)}s` }}>
						<div className="cert-card__badge">✓</div>
						<h3>{cert}</h3>
						<p>Programa Cisco Networking Academy</p>
					</article>
				))}
			</div>
		</section>
	);
}

export default Certifications;
