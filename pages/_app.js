import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
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
