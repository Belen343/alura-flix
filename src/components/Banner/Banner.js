import CardBanner from "components/CardBanner/CardBanner";
import styles from "./Banner.module.css";

function Banner() {
    return(
        <div className={styles.imgBanner}
             style={{ backgroundImage: "url('/img/banner.png')"}}
        >
            <div className={styles.gradiente} style={{ background: "#001233"}}></div>
            <CardBanner/>
        </div>
    )
}

export default Banner;