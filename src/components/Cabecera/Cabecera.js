import { Link } from 'react-router-dom';
import styles from './Cabecera.module.css';
import logo from '../../assets/logo.png';
import CabeceraLink from '../CabeceraLink/CabeceraLink';
function Cabecera() {
    return <>
        <header className={styles.cabecera}>
        <Link to="/">
            <section className={styles.logoContenedor}>
                <img src={logo} alt='Logo de AluraFlix' />
            </section>
        </Link>
        <nav>
            <CabeceraLink url="/">Home</CabeceraLink>
            <CabeceraLink url="/Registro">Nuevo video</CabeceraLink>
        </nav>
    </header>
    </>
}
export default Cabecera;