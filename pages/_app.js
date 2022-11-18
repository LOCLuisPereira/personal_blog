import Navigation from '../components/Navigation'
import Ftr from '../components/Ftr'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navigation/>
      <Component {...pageProps} />
      <Ftr/>
    </div>
  )
}

export default MyApp
