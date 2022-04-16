import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Card from "../components/Card";
import TopListing from "../components/TopListing";
import { UseData } from "../context/dataContext";
import styles from "../styles/index.module.css";

export default function Home() {
  const { projects } = UseData();
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.title}>Recommended ✨</div>

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
