import styles from "./Cards.module.css";
import Card from "components/Card/Card";
import Categoria from "components/Categoria/Categoria";

function Cards({ cardsData, onEditClick }) {
    // Crear una lista de categorías únicas
    const categoriasUnicas = [...new Set(cardsData.map(card => card.categoria))];
    return (
        <>
            {categoriasUnicas.map((categoria) => (
                <div className={styles.sectionCards} key={categoria}>
                    <Categoria categoria={categoria}></Categoria>
                    <div className={styles.containerCards}>
                        {cardsData
                            .filter((card) => card.categoria === categoria)
                            .map((card) => (
                                <Card
                                    key={card.id}
                                    data={card}
                                    onEditClick={onEditClick}
                                />
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
export default Cards;