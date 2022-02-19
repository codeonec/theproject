import styles from "../styles/Card.module.css";
import Button from "../components/Button";

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
          <img src="Icons/like.svg" alt="" />
          <span id="likeCount">{likeCount}</span>
          <img src="Icons/share.svg" alt="" />
          <span>Share</span>
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
                <img src="Icons/uparrow.svg" alt="" />
                <span className={styles.percent}>{percent}%</span>
            </span>
          </div>
        </div>
        <div className={styles.invest}>
          <Button specs={{text:"Invest"}}></Button>
          <div className={styles.moreInfo}></div>
        </div>
      </div>
    </div>
  );
}
