import NavTop from '../components/navTop'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{'fontFamily':'georgia'}} >
      <NavTop/>
      <Component {...pageProps}/>
      <Footer/>
    </div>
  )
}

export default MyApp
