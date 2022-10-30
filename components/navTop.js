import 'bootstrap/dist/css/bootstrap.css'

const NavTop = () => {

    return (
    <div className='text-center' style={{'width':'100vw', 'paddingTop':'1rem'}}>
        <div className='border-bottom'>
            <h2 style={{'fontFamily':'Gerogia'}}>Luis Pereira</h2>
        </div>
        <div className='border-bottom' style={{'paddingTop':'0.5rem'}}>
            <a>
                <Link className='text-decoration-none text-black' href='/'>Home</Link>
            </a>

            <a style={{'paddingLeft':'2rem'}}/>

            <a>
                <Link className='text-decoration-none text-black' href='/curriculum'>Curriculum</Link>
            </a>

            <a style={{'paddingLeft':'2rem'}}/>

            <a>
                <Link className='text-decoration-none text-black' href='/nanogram'>Nanogram</Link>
            </a>
        </div>
    </div>
    )

}

export default NavTop