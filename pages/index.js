import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Card from "../components/Card";
import TopListing from "../components/TopListing";
import styles from "../styles/index.module.css";

export default function Home() {
  const [company, setCompany] = useState([
    {
      dollar:"₹",
      image:"/pngs/icon.png",
      revenue:"6 Mn",
      price:"982.00",
      valuation:"28 Bn",
      founded:"Founded in 2010 by Mr Keval.",
      likeCount:"69K",
      percent:9.12,
      name:"Notion",
      description:"The PEER fund thesis: a crypto-focused venture fund will outperform traditional venture capital over the next 10 years. We are investing in pre-seed, seed, series A with follow-on and focused on equity and token.",
      moreInfo:"https://www.notion.so"
    },{
      dollar:"₹",
      image:"/pngs/icon.png",
      revenue:"6 Mn",
      price:"982.00",
      valuation:"20 Bn",
      founded:"Founded in 2010 by Mr Shah.",
      likeCount:"69K",
      percent:9.12,
      name:"ABC",
      description:"ed on equity and token.",
    },{
      dollar:"₹",
      image:"https://logosandtypes.com/wp-content/uploads/2020/08/reliance.svg",
      revenue:"5 Tn",
      price:"2424.40",
      valuation:"16 Tn",
      founded:"Founded in 1973 by Dhirubhai",
      likeCount:"69K",
      percent:-0.78,
      name:"Reliance",
      description:"Reliance Industries Limited is an Indian multinational conglomerate company, headquartered in Mumbai. RIL's diverse businesses include energy, petrochemicals, natural gas, retail, telecommunications, mass media, and textiles.",
    }
    
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.title}>Recommended ✨</div>
        
        {company.map((x) => 
          (<Card
            dollar={x.dollar}
            image={<img src={x.image}/>}
            revenue={x.revenue}
            price={x.revenue}
            valuation={x.valuation}
            founded={x.founded}
            likeCount={x.likeCount}
            percent={x.percent}
            name={x.name}
            description={x.description}
            moreInfo={x.moreInfo}
          />)
        )}
        {/* <Card
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
        <Card
          dollar="₹"
          image={<img src="https://logosandtypes.com/wp-content/uploads/2020/08/reliance.svg" />}
          revenue="5 Tn"
          price="2424.40"
          valuation="16 Tn"
          founded="Founded in 1973 by Dhirubhai"
          likeCount="69K"
          percent={-0.78}
          name="Reliance"
          description="Reliance Industries Limited is an Indian multinational conglomerate company, headquartered in Mumbai. RIL's diverse businesses include energy, petrochemicals, natural gas, retail, telecommunications, mass media, and textiles."
        />
        <Card
          dollar="₹"
          image={<img src="/pngs/icon.png" />}
          revenue="6 Mn"
          price="444.00"
          valuation="69 Bn"
          founded="Founded in 2010 by Notion Inc."
          likeCount="69K"
          percent={9.12}
          name="Notion"
          description=""
        /> */}
      </div>
      {/* <div className={styles.listings}></div> */}
      <TopListing />
    </div>
  );
}
