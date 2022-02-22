import TopListing from "../../components/TopListing";
import styles from "../../styles/index.module.css";
import style1 from "../../styles/trending.module.css";
import Card from "../../components/Card"

export default function Trending() {
  return (
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={style1.title}><div>Trending &nbsp;</div> <img src="Icons/rocket.svg" alt="" /></div>
          <Card
            dollar="₹"
            image={<img src="/pngs/icon.png" />}
            revenue="6 Mn"
            price="982.00"
            valuation="28 Bn"
            founded="Founded in 2010 by Notion Inc."
            likeCount="69K"
            percent={9.12}
            name="Notion"
            description="The PEER fund thesis: a crypto-focused venture fund will outperform traditional venture capital over the next 10 years. We are investing in pre-seed, seed, series A with follow-on and focused on equity and token."
          />
          <Card
            dollar="₹"
            image={<img src="/pngs/icon.png" />}
            revenue="6 Mn"
            price="982.00"
            valuation="20 Bn"
            founded="Founded in 2010 by Mr Ambani."
            likeCount="69K"
            percent={9.12}
            name="ABC"
            description="ed on equity and token."
          />
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
        <TopListing />
      </div>
  );
}
