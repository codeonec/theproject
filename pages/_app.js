import '../styles/globals.css'
import Head from "next/head";
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import { useRouter } from 'next/router'
import { useContext,useEffect } from "react";
import TopListing from '../components/TopListing';
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { DataProvider } from '../context/dataContext';
import { GlobalProvider, GlobalContext } from '../context/globalContext';


const supportedChainIds = [1,4]
const connectors = {
  injected: {}
}
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(()=>{
    let i=0;
    setInterval(()=>{
      if(i===0){
        document.title="Uprise";
        i=1;
      }
      else if(i===1){
        document.title="Uprise 🚀";
        i=2;
      }
      else if(i===2){
        document.title="Uprise 🚀🚀";
        i=0;
      }
    },2000)
  },[]);
  return (
    <GlobalProvider>
    <DataProvider>
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="Icons/favicon.svg" />
          <title>Uprise</title>
          <meta name="description" content="UPRISE.COM" />
          <meta property="theme-color" content="#000000" />
          <meta property="og:site_name" content="Uprise.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Uprise. Funding next big thing" />
          <meta property="og:type" content="website" />
          <meta property="og:image" itemProp="image" content="" />
          {/* https://uprise-keval9shah.vercel.app/pngs/logo.png */}
          <meta
            property="og:description"
            content="invest in startups from all segments or participate by being an early employee"
          />
        </Head>
        <style jsx>
            {`
              .app_container{
                display: flex;
                position: relative;
                height: calc(100vh - 4.0625rem);
                ${router.pathname !=='/sign_in' && "max-width:1285px;"}
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
            <ThirdwebWeb3Provider supportedChainIds={supportedChainIds}
            connectors={connectors}>
            <Component {...pageProps} />

            </ThirdwebWeb3Provider>
          </div>
        </div>
        
      </div>
    </DataProvider>
    </GlobalProvider>
  )
}

export default MyApp;
