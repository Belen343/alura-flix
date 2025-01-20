import { Link, useLocation } from "react-router-dom";
import styles from "./CabeceraLink.module.css";

function CabeceraLink({url,children}) {
    const location = useLocation();
    //Comparar ruta actual con ruta del link
    const isActive = location.pathname === url;
    //Si esta activo agrega className = link active : Si no className = link
    const linkClass =  isActive ? `${styles.link} ${styles.active}` : styles.link;
    //const linkClass = `${styles.link} ${styles.active}`;

    return <Link to={url} className={linkClass}>
        {children}
    </Link>
}

export default CabeceraLink;