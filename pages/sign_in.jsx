import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/sign_in.module.css";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import Router  from "next/router";


export default function Home() {
  const [signUp,setSignUp]=useState(false);
  const {address, chainId, connectWallet} = useWeb3() 
  // const tokenInst = new web3.eth.Contract(tokenABI, token.address);
  // const balance = await tokenInst.methods.balanceOf(address).call()
 useEffect(()=>{
   if(address){
    Router.push({
      pathname: '/'
    })
   }
 },[address])


  return (
    <div className={styles.container}>
      <Head>
        <title>Uprise</title>
        <meta name="description" content="UPRISE.COM" />
        <meta property="theme-color" content="#000000" />
        <meta property="og:site_name" content="Uprise.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Uprise. Funding next big thing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" itemProp="image" content="Icons/logo.svg" />
        <meta
          property="og:description"
          content="invest in startups from all segments or participate by being an early employee"
        />
      </Head>
  {/* {address ? <div><p>Address: {address}</p><p>ChainId: {chainId}</p></div>: <div><button onClick={() => connectWallet("injected")}>Connect Wallet</button></div>} */}

      <div className={styles.logo}>
        <img src="Icons/logo.svg" alt="hello" />
      </div>
      <div className={styles.loginInterface}>
        <div className={styles.banner}>{signUp ? "Sign Up" : "Log In"} to Uprise</div>
        <div className={styles.sso}>
          {/* <div className={styles.ssoLogin}>
            <img src="Icons/google.svg" alt="" />
            <p>Continue with Google</p>
          </div> */}
          {/* <Button
            specs={{
              width: 21,
              height: 2,
              text: "Sign in with Apple",
              icon: <img src="/google.svg" alt="" />,
            }}
          /> */}
          {address ? <div className={styles.address}>{address.slice(0,14)+"...."+address.slice(28,42)}</div>:
          <div className={styles.ssoLogin} onClick={() =>   connectWallet("injected")    }>
            <img src="Icons/metamask.svg" alt="" />
            <p>Continue with MetaMask</p>
          </div>}
        </div>
        
        <p className={styles.or}>{signUp ? "AND" : "OR"}</p>
        <div className={styles.normalLogin}>
          <div className={styles.field}>
            <p>Email or Username</p>
            <input type="text" placeholder="Email or Username" />
          </div>
          <div className={styles.field}>
            <p>Password</p>
            <input type="password" placeholder="Password" />
          </div>
          <div className={styles.loginButton}>{signUp ? "Sign up" : "Log in"}</div>
          <div className={styles.signup}>
            {signUp ? "Already have an account?" : "Don't have an account?"}
            <span>
              <Link href="#">
                <a onClick={()=>setSignUp(prevCheck => !prevCheck)}>{signUp ? "Log In" : "Sign Up"}</a>
                </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
