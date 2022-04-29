import styles from "../styles/Card.module.css";
import Button from "../components/Button";
import Link from "next/link"
import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";

export default function Card({ dollar, image, description, founded, name, likeCount, valuation, revenue, price, percent, moreInfo,contractAddress }) {

  const {getToken, BuyTokens} = useContext(DataContext)


  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [wallet, setWallet] = useState('')
  const [amount, setAmount] = useState('')
  


  const OpenModal = () => {
    setOpen(cur => !cur)
  }

  const Buy = async ({contract, amount, wallet}) => {
    setLoading(true)
      const buyToken = getToken(contract)
      console.log(buyToken)
      await BuyTokens({
        token: buyToken,
        amount: amount,
        receiver: wallet
      })

    setLoading(false)
  }

  return (
    <>
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
                {percent > 0 ? <img src="Icons/uparrow.svg" alt="" /> : <img src="Icons/downarrow.svg" alt="" />}
                <span className={percent > 0 ? styles.percentGreen : styles.percentRed}>{percent > 0 ? percent : percent * -1}%</span>
              </span>
            </div>
          </div>
          <div className={styles.invest}>
            <Button specs={{ text: "Invest" }} onClick={() => { OpenModal() }}></Button>
            <Link href={moreInfo || "#"}>
              <a target={moreInfo ? "_blank" : ""}>
                <div className={styles.moreInfo}>More Information</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {
        open &&
        <div className={styles.modal}>
          <div className={styles.modalCard}>
            <div className={styles.modalHead}>
              Buy {name}
              <div onClick={() => { OpenModal() }} style={{ padding: '16px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#FFFFFF"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
              </div>
            </div>
            {loading  ? <div style={{display:'flex',alignItems: 'center'}}>
              {/* <div className={styles.processingBox}></div> */}
              Processing.... </div>:
                <>
                  <form className={styles.submitForm} onSubmit={(e)=>{
                    e.preventDefault()
                    Buy({
                      contract: contractAddress,
                      amount: amount,
                      wallet: wallet
                    })
                  }}>
                    <input className={styles.modalInput} placeholder="Wallet address" onChange={e => {setWallet(e.target.value)}} required/>
                    <input className={styles.modalInput} placeholder="Amount" style={{ marginBottom: "15px" }} onChange={e => {setAmount(e.target.value)}} required/>
                    <Button specs={{ text: "Invest" }}  type="submit"></Button>
                  </form>
                </>
              }
          </div>
        </div>
      }
    </>
  );
}
