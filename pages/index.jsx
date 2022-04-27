import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";
import Card from "../components/Card";
import TopListing from "../components/TopListing";
import { DataContext } from "../context/dataContext";
import styles from "../styles/index.module.css";

export default function Home() {
  const { projects } = useContext(DataContext);

  // const Buy = async () => {
  //     const buyToken = getToken('0xDF1047Fd9E425F8fb29aEbA58c681a618e3aB401')
  //     console.log(buyToken)
  //     await BuyTokens({
  //       token: buyToken,
  //       amount: 100000,
  //       receiver: '0x8F9adEcba729210480277e65Cb580B016F3D25d3'
  //     })
      // const balance = await getBalance( buyToken, '0xB109EC51097ba7A3cC121b04662c6A0e0027Ba37')
      // console.log(balance)
  // }

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.title}>Recommended ✨</div>
        <button onClick={()=>{Buy()}}>Buy</button>
        {projects.map((x) => (
          <Card
            key={x.name}
            dollar={x.dollar}
            image={<img src={x.image} />}
            revenue={x.revenue}
            price={x.price}
            valuation={x.valuation}
            founded={x.founded}
            likeCount={x.likeCount}
            percent={x.percent}
            name={x.name}
            description={x.description}
            moreInfo={x.moreInfo}
          />
        ))}
      </div>
      {/* <div className={styles.listings}></div> */}
      <TopListing />
    </div>
  );
}
