import '../styles/globals.css'
import Head from "next/head";
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
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
      <div class="appWrap">
        {router.pathname !== '/sign_in' && <TopBar />}
        <div className='app_container'>
          {router.pathname !== '/sign_in' && <SideBar />}
          <Component {...pageProps} />
        </div>
      </div>
      
    </div>
  )
}

export default MyApp;
