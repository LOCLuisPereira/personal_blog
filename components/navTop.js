import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

const NavTop = () => {

    return (
    <div className='text-center' style={{'width':'100vw', 'paddingTop':'1rem'}}>
        <div className='border-bottom'>
            <h2 style={{'fontFamily':'Gerogia'}}>Luis Pereira</h2>
        </div>
        <div className='border-bottom' style={{'paddingTop':'0.5rem'}}>
            <span>
                <Link className='text-decoration-none text-black' href='/'>Home</Link>
            </span>

            <span style={{'paddingLeft':'2rem'}}/>

            <span>
                <Link className='text-decoration-none text-black' href='/curriculum'>Curriculum</Link>
            </span>

            <span style={{'paddingLeft':'2rem'}}/>

            <span>
                <Link className='text-decoration-none text-black' href='/projects'>Projects</Link>
            </span>

            <span style={{'paddingLeft':'2rem'}}/>

            <span>
                <Link className='text-decoration-none text-black' href='/nanogram'>Nanogram</Link>
            </span>
        </div>
    </div>
    )

}

export default NavTop