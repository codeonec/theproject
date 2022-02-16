import '../styles/globals.css'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <div className='app_container'>
      {router.pathname !== '/sign_in' && <SideBar />}
      {router.pathname !== '/sign_in' && <TopBar />}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
