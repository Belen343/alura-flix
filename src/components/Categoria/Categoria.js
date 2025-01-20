import styles from "./Categoria.module.css";

function Categoria({categoria}) {
    const categoriaClassName = categoria.replace(/\s+/g, '-'); // Reemplaza los espacios por guiones
    return <button className={`${styles.btnCategoria} ${styles[`categoria-${categoriaClassName}`]}`}>{categoria}</button>;
}
export default Categoria;