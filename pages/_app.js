import '../styles/globals.css'
import Head from "next/head";
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import { useRouter } from 'next/router'
import { useEffect } from "react";
import TopListing from '../components/TopListing';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(()=>{
    let i=0;
    setInterval(()=>{
      if(i===0){
        document.title="¯¯OO¯¯";
        i=1;
      }
      else if(i===1){
        document.title="--OO--";
        i=2;
      }
      else if(i===2){
        document.title="__OO__";
        i=0;
      }
    },400)
  },[]);
  return (
    <div>
      <Head>
        <link rel="icon" href="icons/favicon.svg" />
      </Head>
      <style jsx>
          {`
            .app_container{
              display: flex;
              position: relative;
              height: calc(100vh - 65px);
              ${router.pathname !=='/sign_in' && "max-width:1200px;"}
              margin:0 auto;
            }
            .appWrap{
              height:100vh;
            }
          `}
      </style>
      <div className="appWrap">
        {router.pathname !== '/sign_in' && <TopBar />}
        <div className='app_container'>
          {router.pathname !== '/sign_in' && <SideBar />}
          <Component {...pageProps} />
          {router.pathname !== '/sign_in' && <TopListing />}
        </div>
      </div>
      
    </div>
  )
}

export default MyApp;
