import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/sign_in.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Uprise</title>
        <meta name="description" content="UPRISE.COM" />
        <meta property="theme-color" content="#000000" />
        <meta property="og:site_name" content="Uprise.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Uprise. Funding next big thing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" itemProp="image" content="icons/logo.svg" />
        <meta
          property="og:description"
          content="invest in startups from all segments or participate by being an early employee"
        />
      </Head>
      <div className={styles.logo}>
        <img src="icons/logo.svg" alt="" />
      </div>
      <div className={styles.loginInterface}>
        <div className={styles.banner}>Log in to Uprise</div>
        <div className={styles.sso}>
          <div className={styles.ssoLogin}>
            <img src="icons/google.svg" alt="" />
            <p>Continue with Google</p>
          </div>
          {/* <Button
            specs={{
              width: 21,
              height: 2,
              text: "Sign in with Apple",
              icon: <img src="/google.svg" alt="" />,
            }}
          /> */}
          <div className={styles.ssoLogin}>
            <img src="icons/apple.svg" alt="" />
            <p>Continue with Apple</p>
          </div>
        </div>
        <p className={styles.or}>OR</p>
        <div className={styles.normalLogin}>
          <div className={styles.field}>
            <p>Email or Username</p>
            <input type="text" placeholder="Email or Username" />
          </div>
          <div className={styles.field}>
            <p>Password</p>
            <input type="text" placeholder="Password" />
          </div>
          <div className={styles.loginButton}>Log in</div>
          <div className={styles.signup}>
            Don&apos;t have an account?
            <span>
              <a href="/sign_up">Sign up</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
