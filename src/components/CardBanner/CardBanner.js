import styles from "./CardBanner.module.css";
import foto from "./cardBanner.png";

function CardBanner() {
    return (
        <section className={styles.card}>
            <div className={styles.cardInfo}>
                <button className={styles.btn}>Front End</button>
                <div className={styles.texto}>
                    <h1>Qué Significa Pensar Como Programador</h1>
                    <p>¿Cuáles son las principales características de un programador? ¿Qué habilidades y competencias debe tener alguien que quiere seguir esa carrera? </p>    
                </div>    
            </div>
            <div className={styles.cardImage}>
                <img src={foto} alt="Qué Significa Pensar Como Programador" />
            </div>
        </section>
    )
}

export default CardBanner;