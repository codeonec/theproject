import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Uprise</title>
        <meta name="description" content="UPRISE.COM" />
        <meta property="theme-color" content="#000000" />
        <meta property="og:site_name" content="Uprise.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Uprise. Funding next big thing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" itemProp="image" content="/logo.svg" />
        <meta
          property="og:description"
          content="invest in startups from all segments or participate by being an early employee"
        />
      </Head>
      <div className={styles.home}>
        <div className={styles.cards}>
          <div className={styles.recommended}>Recommended ✨</div>
          <Card />
        </div>
        <div className={styles.listings}></div>
      </div>
    </div>
  );
}
