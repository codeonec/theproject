import '../styles/globals.css'
import '../components/SideBar'
import '../components/TopBar'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'

function MyApp({ Component, pageProps }) {
  return (
    <div className='app_container'>
      <SideBar />
      <TopBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
