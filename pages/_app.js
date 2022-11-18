import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navigation/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
