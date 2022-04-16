// import Developer from "../components/TopListing/Developers";
import styles from "../styles/about.module.css";

export default function About()
{
    return(
        <div >
            <div className={styles.uprise}>
                <h1 className={styles.title}>About The Uprise</h1>
                <p className={styles.para}>Uprise provides platform for people with new and exciting concepts to receive funding from eager investors. It provides a way for <span className={styles.span}>entrepreneurs</span> to increase their network or simply raise capital and expand their scalable start-up to new horizons.Our services are made on the foundation of <span className={styles.span}>WEB 3.0</span> technologies such as smart contracts and <span className={styles.span}>blockchain</span> which allow secure transactions of equity and establishes trust among investors and  founders.
                </p>
                <p className={styles.para}>If you are looking for something new, you are in the right place. We strive to be <span className={styles.span}>industrious</span> and <span className={styles.span}>innovative</span>, offering our customers something they want, putting their desires at the top of our priority list.</p>
            </div>
            <div className={styles.Developers}>

            </div>

        </div>
    )
}