import { UseData } from "../context/dataContext";
import styles from "../styles/add.module.css";
import Button from "../components/Button";

export default function Add()
{
  const {addProject} = UseData()

    const handleSubmit = (e) => {
        addProject({
            dollar: "₹",
            image: "/pngs/icon.png",
            revenue: "6 Mn",
            price: "982.05",
            valuation: "28 Bn",
            founded: "Founded in 2010 by Mr Keval.",
            likeCount: "69K",
            percent: 9.12,
            name: "Notion",
            description: "The PEER fund thesis: a crypto-focused venture fund will outperform traditional venture capital over the next 10 years. We are investing in pre-seed, seed, series A with follow-on and focused on equity and token.",
            moreInfo: "https://www.notion.so"
        })
    }

    return(
        <div >
            <div className={styles.uprise}>
                <Button onClick={() => {handleSubmit()}}
              specs={{
                text: "Add",
                height: 2.5,
              }} 
            />
            </div>
        </div>
    )
}