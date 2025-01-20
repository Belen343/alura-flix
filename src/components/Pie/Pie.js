import { Link } from 'react-router-dom';
import styles from "./Pie.module.css";
import logo from '../../assets/logo.png';
import iconoHome from '../../assets/iconos/home.png';
import iconoNuevo from '../../assets/iconos/NuevoVideo.png';

function Pie() {
    return <footer className={styles.pie}>
        <Link to="/" className={styles.link}>
            <img src={logo} alt='Logo de AluraFlix' />
        </Link>
        <div className={styles.containerButton}>
            <Link to="/" className={styles.botonHome}>
                <img src={iconoHome} alt='Icono de Home' />
                <span>HOME</span>
            </Link>
            <Link to="/Registro">
                <img src={iconoNuevo} alt='Icono de Nuevo' />
            </Link>
        </div>
    </footer>
}
export default Pie;