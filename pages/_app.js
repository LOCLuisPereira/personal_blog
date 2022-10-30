import NavTop from '../components/navTop'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{'fontFamily':'georgia'}} >
      <NavTop/>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
