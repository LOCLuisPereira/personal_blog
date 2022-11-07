import 'bootstrap/dist/css/bootstrap.css'
import {useState} from 'react'

const House = ({vs, lifes, changeLifes}) => {
    console.log(vs)
    const [value, setValue] = useState(vs)

    const g = () => {
        switch(value){
            case 0 : return 'white'
            case 1 : return 'black'
            case 2 : return 'green'
            default : return 'red'
        }
    }

    const f = (event) => {
        event.preventDefault()
        if (value != 1) {
            changeLifes(lifes-1)
        }
        if (value == 1) {
            setValue(1)
        }
    }

    return (
        <div
            className='border'
            onClick={f}
            style={{
                'backgroundColor' : g(value),
                'height':'10vh', 'width':'10vh'
            }}
        />
    )
}

const Projects = () => {
    const [lifes, setLifes] = useState(3)

    return (

        <div className='container'>
            <p className='display-6' style={{'padding':'4rem'}}>Waiting for udpates...</p>
        </div>
    )
}

export default Projects