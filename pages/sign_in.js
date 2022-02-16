import Head from "next/head";
import Image from "next/image";

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
        <meta property="og:image" itemProp="image" content="/logo.svg"/>
        <meta
          property="og:description"
          content="invest in startups from all segments or participate by being an early employee"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="logo">
        <img src="/logo.svg" alt="" />
      </div>
      <div className="loginInterface">
        <div className="banner">Log in to Uprise</div>
        <div className="sso">
          <div className="ssoLogin">
            <img src="/google.svg" alt="" />
            <p>Continue with Google</p>
          </div>
          <div className="ssoLogin">
            <img src="/apple.svg" alt="" />
            <p>Continue with Apple</p>
          </div>
        </div>
        <p className="or">OR</p>
        <div className="normalLogin">
          <div className="Email field">
            <p>Email or Username</p>
            <input type="text" placeholder="Email or Username" />
          </div>
          <div className="Password field">
            <p>Password</p>
            <input type="text" placeholder="Password" />
          </div>
          <div className="loginButton">Log in</div>
          <div className="signup">
            Don&apos;t have an account? <span><a href="/sign_up">Sign up</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}
