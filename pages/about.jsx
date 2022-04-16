// import Developer from "../components/TopListing/Developers";
import styles from "../styles/about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.uprise}>
      <h1 className={styles.title}>
        About The <span className={styles.span}>Uprise</span>
      </h1>
      <p className={styles.para}>
        Uprise provides platform for people with new and exciting concepts to
        receive funding from eager investors. It provides a way for{" "}
        <span className={styles.span}>entrepreneurs</span> to increase their
        network or simply raise capital and expand their scalable start-up to
        new horizons.Our services are made on the foundation of{" "}
        <span className={styles.span}>WEB 3.0</span> technologies such as smart
        contracts and <span className={styles.span}>blockchain</span> which
        allow secure transactions of equity and establishes trust among
        investors and founders.
      </p>
      <p className={styles.para}>
        If you are looking for something new, you are in the right place. We
        strive to be <span className={styles.span}>industrious</span> and{" "}
        <span className={styles.span}>innovative</span>, offering our customers
        something they want, putting their desires at the top of our priority
        list.
      </p>
      <div className={styles.developers}>
          <div className={styles.profileCard}>
              <img src="https://avatars.githubusercontent.com/u/59252995?v=4"></img>
              <div className={styles.links}>
                  <div className={styles.link}></div>
                  <div className={styles.link}></div>
                  <div className={styles.link}></div>
              </div>
          </div>
          <div className={styles.profileCard}>
            <img src="https://avatars.githubusercontent.com/u/45474439?v=4"></img>
            <div className={styles.links}>
                  <div className={styles.link}></div>
                  <div className={styles.link}></div>
                  <div className={styles.link}></div>
              </div>
          </div>
          <div className={styles.profileCard}>
            <img src="https://avatars.githubusercontent.com/u/50258158?v=4"></img>
            <div className={styles.links}>
                  <div className={styles.link}></div>
                  <div className={styles.link}></div>
                  <div className={styles.link}></div>
              </div>
          </div>
          <div className={styles.profileCard}>
            <img src="https://avatars.githubusercontent.com/u/49111661?v=4"></img>
            <div className={styles.links}>
                  <div className={styles.link}></div>
                  <div className={styles.link}></div>
                  <div className={styles.link}></div>
              </div>
          </div>
      </div>
    </div>
  );
}



// import Developer from "../components/TopListing/Developers";
// import styles from "../styles/about.module.css";
// import Developer from "../components/Developer";

// export default function About()
// {
//     var developers=[
//         {Name:"Keval Shah",
//         Pic:"https://avatars.githubusercontent.com/u/59252995?v=4",
//         Github:"https://github.com/Keval9shah",
//         Twitter:"https://twitter.com/keval2001",
//         Linkedin:"https://www.linkedin.com/in/keval-shah-a4b2811a3/",
//         Title:"Frontend Developer"},
//         {Name:"Rushil Shah",
//         Pic:"https://avatars.githubusercontent.com/u/45474439?v=4",
//         Github:"https://github.com/Rushil45",
//         Twitter:"https://twitter.com/Rushil10236803",
//         Linkedin:"https://www.linkedin.com/in/rushil-s-398154120/",
//         Title:"Frontend Developer"},
//         {Name:"Darshan Suthar",
//         Pic:"https://avatars.githubusercontent.com/u/50258158?v=4",
//         Github:"https://github.com/drshnn",
//         Twitter:"https://twitter.com/drshnn",
//         Linkedin:"https://www.linkedin.com/in/darshan-suthar-606504188/",
//         Title:"Full-Stack Developer"},
//         {Name:"Ritul Patel",
//         Pic:"https://avatars.githubusercontent.com/u/49111661?v=4",
//         Github:"https://github.com/codeonec",
//         Twitter:"https://twitter.com/codeonec",
//         Linkedin:"https://www.linkedin.com/in/ritul-patel-a2749b196/",
//         Title:"Full-Stack Developer"}
//     ]
//     return(
//         <div>
//             <div className={styles.uprise}>
//                 <h1 className={styles.title}>About The Uprise</h1>
//                 <p className={styles.para}>Uprise provides platform for people with new and exciting concepts to receive funding from eager investors. It provides a way for <span className={styles.span}>entrepreneurs</span> to increase their network or simply raise capital and expand their scalable start-up to new horizons.Our services are made on the foundation of <span className={styles.span}>WEB 3.0</span> technologies such as smart contracts and <span className={styles.span}>blockchain</span> which allow secure transactions of equity and establishes trust among investors and  founders.
//                 </p>
//                 <p className={styles.para}>If you are looking for something new, you are in the right place. We strive to be <span className={styles.span}>industrious</span> and <span className={styles.span}>innovative</span>, offering our customers something they want, putting their desires at the top of our priority list.</p>
//             </div>
//             <div className={styles.Developers}>
//                 {developers.map((x) =>
//                 <Developer key={x.Name}
//                 Github={x.Github}
//                 Pic={<img src={x.Pic}/>}
//                 Twitter={x.Twitter}
//                 Linkedin={x.Linkedin}
//                 Title={x.Title}
//                 />
//                 )}
//             </div>

//         </div>
//     )
// }