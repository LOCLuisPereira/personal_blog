import 'bootstrap/dist/css/bootstrap.css'

import Image from 'next/image'

import Header from '../components/header'

export default function Home() {
  return (
  
    <div className='container'>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#" style={{'paddingLeft':'1rem'}}>Luis Pereira</a>

        <div class="collapse navbar-collapse">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#">JustForShow</a>
            <a class="nav-item nav-link" href="#">NotWorking</a>
          </div>
        </div>
      </nav>

      <div className='container'/>

      <Header/>

    </div>
  )
}
