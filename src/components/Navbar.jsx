import Dock from './Dock';
import { MdHome } from 'react-icons/md';
import { FaUser, FaCode, FaCertificate, FaEnvelope, FaLightbulb, FaBriefcase } from 'react-icons/fa';

function Navbar() {
  const items = [
    { 
      icon: <MdHome size={20} />, 
      label: 'Yami.dev', 
      onClick: () => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <FaUser size={18} />, 
      label: 'Sobre mí', 
      onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <FaBriefcase size={18} />, 
      label: 'Proyectos', 
      onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <FaCertificate size={18} />, 
      label: 'Certificaciones', 
      onClick: () => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <FaEnvelope size={18} />, 
      label: 'Contacto', 
      onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) 
    },
  ];

  return <Dock items={items} panelHeight={50} magnification={60} distance={150} />;
}

export default Navbar;
