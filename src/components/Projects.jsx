import { useState } from "react";
import { FaJsSquare, FaReact, FaNodeJs, FaPhp, FaJava, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import "./Projects.css";

function Projects() {
	const [activeTab, setActiveTab] = useState('proyectos');

	const skills = [
		{ label: 'JavaScript', icon: <FaJsSquare /> },
		{ label: 'React', icon: <FaReact /> },
		{ label: 'Node.js', icon: <FaNodeJs /> },
		{ label: 'PHP', icon: <FaPhp /> },
		{ label: 'Java', icon: <FaJava /> },
		{ label: 'Tailwind CSS', icon: <SiTailwindcss /> },
		{ label: 'MySQL', icon: <SiMysql /> },
		{ label: 'Git & GitHub', icon: <FaGitAlt /> },
	];

	return (
		<section id="projects" className="seccion projects">
			<div className="projects__header">
				<h2>Proyectos destacados</h2>
				<div className="projects__tabs">
					<button
						className={`tab-link ${activeTab === 'proyectos' ? 'active' : ''}`}
						onClick={() => setActiveTab('proyectos')}
					>
						Proyectos
					</button>
					<button
						className={`tab-link ${activeTab === 'habilidades' ? 'active' : ''}`}
						onClick={() => setActiveTab('habilidades')}
					>
						Lenguajes 
					</button>
				</div>
			</div>

			{activeTab === 'proyectos' && (
				<div className="projects__list">
					<article className="project-card">
						<h3>Portafolio</h3>
						<div className="project-card__tags">
							<span className="tag">React</span>
							<span className="tag">JavaScript</span>
							<span className="tag">Tailwind</span>
						</div>
						<p className="project-card__description">
							Portafolio personal desarrollado con React y Tailwind CSS, con animaciones interactivas y diseño responsivo.
						</p>
						<a 
							className="project-card__btn" 
							href="https://github.com/CookyYami/Portafolio-" 
							target="_blank" 
							rel="noopener noreferrer"
						>
							Ver repositorio
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
							</svg>
						</a>
					</article>
					<article className="project-card">
						<div className="project-card__header">
							<h3>Sistema de Pedidos</h3>
							<div className="project-card__tags">
								<span className="tag">Java</span>
								<span className="tag">PostgreSQL</span>
								<span className="tag">Supabase</span>
							</div>
						</div>
						<p className="project-card__description">
							Aplicación de consola para la Pastelería Maffy. Sistema de gestión de pedidos con conexión a base de datos PostgreSQL en la nube usando Supabase, con operaciones CRUD para productos y ventas.
						</p>
						<a 
							className="project-card__btn" 
							href="https://github.com/CookyYami/EquipoMaffy" 
							target="_blank" 
							rel="noopener noreferrer"
						>
							Ver repositorio
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
							</svg>
						</a>
					</article>
					<article className="project-card">
						<div className="project-card__header">
							<h3>Sistema de Reservas SPA</h3>
							<div className="project-card__tags">
								<span className="tag">Java</span>
								<span className="tag">POO</span>
								<span className="tag">GUI (NetBeans)</span>
							</div>
						</div>
						<p className="project-card__description">
							Sistema de reservas para un spa, construido en Java con POO y GUI en NetBeans. Permite gestionar clientes, servicios y reservas con interacción visual.
						</p>
						<a 
							className="project-card__btn" 
							href="https://github.com/CookyYami/gestion-de-reservas-de-spa" 
							target="_blank" 
							rel="noopener noreferrer"
						>
							Ver repositorio
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
							</svg>
						</a>
					</article>
				</div>
			)}

			{activeTab === 'habilidades' && (
				<ul className="skills__grid">
					{skills.map((skill) => (
						<li key={skill.label}>
							<div className="skill-icon">{skill.icon}</div>
							<span>{skill.label}</span>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}

export default Projects;
