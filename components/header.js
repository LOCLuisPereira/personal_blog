import 'bootstrap/dist/css/bootstrap.css'

import Image from 'next/image'

import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsMailbox} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const name = 'Luis Pereira'
const role = 'Master\'s in Computer Science and Engineering' 
const intro_text = 'Welcome! I am an enthusiatic sofware engineer who loves building solutions that breathe in and out real world data.'

const linkedin = 'luiscavacapereira'
const email = 'luiscavacapereira@gmail.com'
const phone = '(+351) 968 152 552'
const github = 'LOCLuisPereira'
const medium = '@luiscavacapereira'
const leetcode = ''

const Header = () => {
    return (
        <div className='container' style={{'fontFamily':'Georgia'}}>


            <div className='row'>
                <div className='col'>
                    <div className='container align-center'>
                        
                        <div className='container' style={{'paddingTop':'3rem', 'paddingLeft':'1rem'}}/>
                        
                        
                        <div className='card justify-items-center border-white'>
                            <h3 className='align-middle' style={{'paddingLeft':'1rem'}}>{name}</h3>
                            <h5 className='align-middle' style={{'paddingLeft':'1rem'}}>{role}</h5>
                        </div>
        
                        <div className='container' style={{'paddingTop':'3rem'}}/>

                        <div className='card bg-dark text-white text-left rounded justify-items-center'>
                            <p className='card-text display-6 align-middle' style={{'padding':'2rem'}}>{intro_text}</p>
                        </div>
            
                        <div className='container' style={{'paddingTop':'3rem'}}/>

                        <div className='card justify-items-center border-white'>
                            <h3 className='align-middle' style={{'paddingLeft':'1rem'}}>Where can you find me?</h3>
                            
                            <a style={{'paddingLeft':'1rem'}}>
                                <big><BsMailbox/></big> <a className='align middle text-decoration-none text-muted' style={{'paddingLeft':'1rem'}}>{email}</a>
                            </a>

                            <a style={{'paddingLeft':'1rem'}}>
                                <big><BsFillTelephoneFill/></big> <a className='align middle text-decoration-none text-muted' style={{'paddingLeft':'1rem'}}>{phone}</a>
                            </a>

                            <a style={{'paddingLeft':'1rem'}}>
                                <big><BsLinkedin/></big> <a className='align middle text-decoration-none text-muted' style={{'paddingLeft':'1rem'}}>{linkedin}</a>
                            </a>

                            <a style={{'paddingLeft':'1rem'}}>
                                <big><BsGithub/></big> <a className='align middle text-decoration-none text-muted' style={{'paddingLeft':'1rem'}}>{github}</a>
                            </a>

                            <a style={{'paddingLeft':'1rem'}}>
                                <big><BsMedium/></big> <a className='align middle text-decoration-none text-muted' style={{'paddingLeft':'1rem'}}>{medium}</a>
                            </a>

                        </div>



                    </div>
                </div>
                <div className='col'>
                    <div className='container justify-content-center d-flex rounded' style={{'height':'90vh'}}>
                        <img src="/photo.jpg" alt="..." className="img-fluid" ></img>
                    </div>
                </div>
            </div>






        </div>
    )
}

export default Header