import FormRegistro from "components/FormRegistro/FormRegstro";
import styles from "./Registro.module.css";

function Registro() {
    return <section className={styles.containerRegistro}>
        <div className={styles.containerTitulos}>
            <h1>Nuevo registro</h1>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </div>
        <FormRegistro />
    </section>
}
export default Registro;