import { UseData } from "../context/dataContext";
import styles from "../styles/add.module.css";
import Button from "../components/Button";

export default function Add() {
  const { addProject } = UseData();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({
      dollar: "₹",
      image: e.target[1].value,
      revenue: e.target[4].value,
      price: e.target[5].value,
      valuation: e.target[3].value,
      founded: `Founded in 2010 by Mr ${e.target[2].value}.`,
      likeCount: "69K",
      percent: 9.12,
      name: e.target[0].value,
      description: e.target[6].value,
      moreInfo: "https://www.notion.so",
    });
    console.log(e.target);
  };

  return (
    <div className={styles.container}>
      <div className={styles.uprise}>
        <h1 style={{ fontSize: "1.0625rem" }}>Post Project</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className={styles.group}>
            <div className={styles.formElement}>
              <label htmlFor="companyName">Company Name</label>

              <input
                type="text"
                name="companyName"
                placeholder="upRise Co."
                required
              />
            </div>
            <div className={styles.formElement}>
              <label htmlFor="companyLogo">Company Logo</label>

              <input
                type="text"
                name="companyLogo"
                placeholder="https://imgur.com/34NeeMh"
                required
              />
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.formElement}>
              <label htmlFor="foundedBy">Founded By</label>
              <input
                type="text"
                name="foundedBy"
                placeholder="The Boys"
                required
              />
            </div>
            <div className={styles.formElement}>
              <label htmlFor="valuation">Valuation</label>
              <input
                type="text"
                name="valuation"
                placeholder="3,500,000"
                required
              />
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.formElement}>
              <label htmlFor="revenue">Revenue</label>
              <input
                type="text"
                name="revenue"
                placeholder="500,000"
                required
              />
            </div>
            <div className={styles.formElement}>
              <label htmlFor="price">Price</label>
              <input type="text" name="price" placeholder="500C" required />
            </div>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="abstract">Abstract</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write something about your company"
            ></textarea>
          </div>

          <Button
            className={styles.submit}
            specs={{
              text: "Submit",
              height: 2.5,
              type: "submit",
            }}
          />
          {/* <input type="submit" value="submit" /> */}
        </form>
      </div>
    </div>
  );
}
