import styles from "./Card.module.css";
import iconBorrar from "../../assets/iconos/borrar.png";
import iconEditar from "../../assets/iconos/editar.png";

function Card({ data, onEditClick }) {
    const { id, titulo, imagen, categoria } = data;
    const categoriaClassName = categoria.replace(/\s+/g, '-'); // Reemplaza los espacios por guiones

    const handleDelete = () => {
        fetch(`http://localhost:5000/videos/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then(() => {
                // Eliminar la card de la interfaz
                const event = new CustomEvent('cardDeleted', { detail: id });
                window.dispatchEvent(event);  // Enviar evento de eliminación
            })
            .catch((error) => {
                console.error('Error al eliminar:', error);
            });
    };

    return (
        <div className={`${styles.card} ${styles[`categoria-${categoriaClassName}`]}`}>
            <div className={styles.cardImage}>
                <img src={imagen} alt={titulo} />
            </div>
            <div className={styles.cardButtons}>
                <button onClick={handleDelete}>
                    <img src={iconBorrar} alt="Icono de borrar" />
                    Borrar
                </button>
                <button onClick={() => onEditClick(data)}>
                    <img src={iconEditar} alt="Icono de editar" />
                    Editar
                </button>
            </div>
        </div>
    )
}

export default Card;