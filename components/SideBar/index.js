import Link from "next/link"
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/SideBar.module.css"

const SideBar = () => {
    const router = useRouter()
    return (
        <div className={styles.sidebar}>
            <div className={styles.links}>
                <Link href="/">
                    <a className={router.pathname == "/" ? `${styles.link} ${styles.active}` : `${styles.link}`}>
                        <Image src="/Icons/home.svg" height="18" width="18" /><div className={styles.text}>&nbsp;&nbsp;&nbsp;Home</div>
                    </a>
                </Link>
                <Link href="/explore">
                    <a className={router.pathname == "/explore" ? `${styles.link} ${styles.active}` : `${styles.link}`}>
                        <Image src="/Icons/explore.svg" height="18" width="18" /><div className={styles.text}>&nbsp;&nbsp;&nbsp;Explore</div>
                    </a>
                </Link>
                <Link href="/trending">
                    <a className={router.pathname == "/trending" ? `${styles.link} ${styles.active}` : `${styles.link}`}>
                        <Image src="/Icons/trending.svg" height="18" width="18" /><div className={styles.text}>&nbsp;&nbsp;&nbsp;Trending</div>
                    </a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname == "/about" ? `${styles.link} ${styles.active}` : `${styles.link}`}>
                        <Image src="/Icons/about.svg" height="18" width="18" /><div className={styles.text}>&nbsp;&nbsp;&nbsp;About</div>
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default SideBar