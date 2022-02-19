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
          <Card
            dollar="₹"
            image={<img src="/pngs/icon.png" />}
            revenue="6 Mn"
            price="982.00"
            valuation="69 Bn"
            founded="Founded in 2010 by Notion Inc."
            likeCount="69K"
            percent={9.12}
            name="Notion"
            description="The PEER fund thesis: a crypto-focused venture fund will outperform traditional venture capital over the next 10 years. We are investing in pre-seed, seed, series A with follow-on and focused on equity and token."
          />
        </div>
        <div className={styles.listings}></div>
      </div>
    </div>
  );
}
