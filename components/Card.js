import styles from "../styles/Card.module.css";
import Button from "../components/Button";

export default function Card() {
  return (
    <div className={styles.Card}>
      <div className={styles.information}>
        <div className={styles.profile}>
          <div id="logo" className={styles.pic}>
            <img src="pngs/icon.png" alt="" />
          </div>
          <div className={styles.title}>
            <div id="companyName">Notion</div>
            <span id="foundedBy">Founded in 2010 by Notion Inc.</span>
          </div>
        </div>
        <div className={styles.description}>
          The PEER fund thesis: a crypto-focused venture fund will outperform
          traditional venture capital over the next 10 years. We are investing
          in pre-seed, seed, series A with follow-on and focused on equity and
          token.
        </div>
        <div className={styles.likeNshare}>
          <img src="Icons/like.svg" alt="" />
          <span id="likeCount">69K</span>
          <img src="Icons/share.svg" alt="" />
          <span id="shareCount">Share</span>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.topStats}>
          <div className={styles.statTitle}>
            <div>Valuation</div> <br /> <span id="valuation">$69 Bn.</span>
          </div>
          <div className={styles.statTitle + " " + styles.revenue}>
            <div>Revenue</div> <br /> <span id="Revenue">$6 Mn.</span>
          </div>
        </div>
        <div className={styles.statTitle + " " + styles.price}>
          <div>Price</div> <br />{" "}
          <div className={styles.priceWrap}>
            <span id="Price">
              $982.00
                <img src="Icons/uparrow.svg" alt="" />
                <span className={styles.percent}>6.12%</span>
            </span>
          </div>
        </div>
        <div className={styles.invest}>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}
