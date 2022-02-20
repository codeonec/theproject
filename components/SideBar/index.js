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
                        <Image src="/icons/home.svg" height="18" width="18" />&nbsp;&nbsp;&nbsp;Home
                    </a>
                </Link>
                <Link href="/explore">
                    <a className={router.pathname == "/explore" ? `${styles.link} ${styles.active}` : `${styles.link}`}>
                        <Image src="/icons/explore.svg" height="18" width="18" />&nbsp;&nbsp;&nbsp;Explore
                    </a>
                </Link>
                <Link href="/trending">
                    <a className={router.pathname == "/trending" ? `${styles.link} ${styles.active}` : `${styles.link}`}>
                        <Image src="/icons/trending.svg" height="18" width="18" />&nbsp;&nbsp;&nbsp;Trending
                    </a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname == "/about" ? `${styles.link} ${styles.active}` : `${styles.link}`}>
                        <Image src="/icons/about.svg" height="18" width="18" />&nbsp;&nbsp;&nbsp;About
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default SideBar