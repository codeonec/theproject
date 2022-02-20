import styles from "../styles/Card.module.css";
import Button from "../components/Button";
import Link from "next/link"

export default function Card({dollar,image,description,founded,name,likeCount,valuation,revenue,price,percent,moreInfo}) {
  return (
    <div className={styles.Card}>
      <div className={styles.information}>
        <div className={styles.profile}>
          <div id="logo" className={styles.pic}>
            {image}
          </div>
          <div className={styles.title}>
            <div id="companyName">{name}</div>
            <span id="foundedBy">{founded}</span>
          </div>
        </div>
        <div className={styles.description}>
          {description}
        </div>
        <div className={styles.likeNshare}>
          <div className={styles.like}>
            <img src="Icons/like.svg" alt="" />
            <span id="likeCount">{likeCount}</span>
          </div>
          <div className={styles.share}>
            <img src="Icons/share.svg" alt="" />
            <span>Share</span>
            </div>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.topStats}>
          <div className={styles.statTitle}>
            <div>Valuation</div> <br /> <span id="valuation">{dollar}{valuation}.</span>
          </div>
          <div className={styles.statTitle + " " + styles.revenue}>
            <div>Revenue</div> <br /> <span id="Revenue">{dollar}{revenue}.</span>
          </div>
        </div>
        <div className={styles.statTitle + " " + styles.price}>
          <div>Price</div> <br />{" "}
          <div className={styles.priceWrap}>
            <span id="Price">
              {dollar}{price}
                {percent>0?<img src="Icons/uparrow.svg" alt="" />:<img src="Icons/downarrow.svg" alt="" />}
                <span className={percent>0?styles.percentGreen:styles.percentRed}>{percent>0?percent:percent*-1}%</span>
            </span>
          </div>
        </div>
        <div className={styles.invest}>
          <Button specs={{text:"Invest"}}></Button>
          <Link href={moreInfo || "#"}>
            <a target={moreInfo?"_blank":""}>
                <div className={styles.moreInfo}>More Information</div>
            </a>
        </Link>
        </div>
      </div>
    </div>
  );
}
