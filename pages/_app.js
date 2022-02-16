import '../styles/globals.css'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <div>
      <style jsx>
          {`
            .app_container{
              display: flex;
            }
          `}
      </style>
      {router.pathname !== '/sign_in' && <TopBar />}
      <div className='app_container'>
        {router.pathname !== '/sign_in' && <SideBar />}
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
