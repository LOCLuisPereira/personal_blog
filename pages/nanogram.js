import 'bootstrap/dist/css/bootstrap.css'

import {useState} from 'react'

const Cell = ({value, lifes, setLifes, currentCells, setCurrentCells}) => {
    const [vs, changeVs] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const f = (event) => {
        event.preventDefault()
        if (!disabled) {
            setDisabled(true)
            if (value == 1){
                setCurrentCells(currentCells+1)
                changeVs(1)
            } else {
                setLifes(lifes-1)
                changeVs(2)
            }
        }
    }

    return (
        <div
        key={(Math.random()*1000).toString()}
        className={`col-1 border`}
        onClick={f}
        style={{
            'backgroundColor':vs == 1 ? 'black' : vs == 2 ? 'red' : 'white',
            'height':'5vh',
            'width':'5vh',
            'margin':'0.25vh'
        }}
        />
    )
}

const Nanogram = () => {
    const [size, setSize] = useState(-1)
    const [difficulty, setDifficulty] = useState('.')
    const [showButtonStart, setShowButtonStart] = useState(false)

    const [board, setBoard] = useState([])
    const [infoCols, setInfoCols] = useState([])
    const [infoRows, setInfoRows] = useState([])
    const [lifes, setLifes] = useState(3)
    const [totalCells, setTotalCells] = useState(0)
    const [currentCells, setCurrentCells] = useState(0)

    const sizeChanger = (event) => {
        event.preventDefault()
        setSize(event.target.value)
    }

    const difficultyChanger = (event) => {
        event.preventDefault()
        setDifficulty(event.target.value)
        setShowButtonStart(true)
    }

    const f = () => {
        const x = Math.random()
        switch (difficulty){
            case 'easy' :
                return x <= 0.8 ? 1 : 0
            case 'medium' :
                return x <= 0.6 ? 1 : 0
            case 'hard' :
                return x <= 0.4 ? 1 : 0
            case 'impossible' :
                return x <= 0.2 ? 1 : 0
            default :
                return 1
        }
    }

    const freduce = (v) => {
        var fv = []
        for (let idx = 0; idx<parseInt(size); idx++){
            if (v[idx] === 1){
                if (!fv.length){fv.push(1)}
                else {
                    const l = fv.length - 1
                    fv[l] += 1
                }
            } else { fv.push(0) }
        }
        return fv.filter(x => x != 0)
    }

    const reduce = (matrix) => {
        var tmp = []
        for (let i=0; i<parseInt(size); i++){
            tmp.push(freduce( matrix[i] ))
        }
        return tmp
    }

    const generateBoard = (event) => {
        event.preventDefault()

        setShowButtonStart(false)

        var infoCols_ = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
        var infoRows_ = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
        var board_ = []
        var tst = 0
        for (let i=0; i<parseInt(size); i++){
            var col = []
            for (let j=0; j<parseInt(size); j++){
                const value = f()
                
                tst = tst + value

                col.push(value)
                infoCols_[j].push(value)
                infoRows_[i].push(value)
            }
            board_.push(col)
        }
        setBoard(board_)
        setTotalCells(tst)

        var cols = reduce(infoCols_)
        var rows = reduce(infoRows_)
        
        for (let i = 0; i<parseInt(size); i++){
            infoCols.push( [i, cols[i]] )
            infoRows[i] = [i, rows[i]]

        }
    }

    const string_size = size == -1 ? 'Select board size...' : `Size of the board set to ${size}x${size}`
    
    const difficulty_string = difficulty == '.' ? 'Select game difficulty...' : `Difficulty set to ${difficulty}`

    return (
        <div className='container align-center' style={{'fontFamily':'Georgia'}}>

            <div className='container' style={{'paddingTop':'3rem', 'paddingLeft':'1rem'}}/>

            <div className='card justify-items-center border-white'>
                <h3 className='align-middle' style={{'paddingLeft':'1rem'}}>Nanogram</h3>
                <h5 className='align-middle' style={{'paddingLeft':'1rem'}}>{string_size}</h5>
                <h5 className='align-middle' style={{'paddingLeft':'1rem'}}>{difficulty_string}</h5>
            </div>

            <div className='container' style={{'paddingTop':'3rem', 'paddingLeft':'1rem'}}/>

            <select
            className='form-select form-select-sm text-center'
            aria-label='Size of Board'
            onChange={sizeChanger}
            style={{'display' : size != -1 ? 'none' : 'block'}}
            >
                <option selected value='-1'>Select size...</option>
                <option value='5'>5x5</option>
                <option value='10'>10x10</option>
                <option value='15'>15x15</option>
            </select>

            <select
            className='form-select form-select-sm text-center'
            aria-label='Difficulty of the Game'
            onChange={difficultyChanger}
            style={{'display' : size == -1 || difficulty != '.' ? 'none' : 'block'}}
            >
                <option selected value='.'>Select difficulty...</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
                <option value='impossible'>Impossible</option>
            </select>

            <button
            type='button'
            className='btn btn-dark'
            onClick={generateBoard}
            style={{'display': !showButtonStart ?'none':'block','width':'100%'}}
            >
                Start playing
            </button>


            <div className='container' style={{'paddingTop':'1rem', 'paddingLeft':'1rem'}}/>

            <div className='container align-center' style={{'display':lifes>0 && infoCols.length > 0 && currentCells!=totalCells?'block':'none'}}>
                
                <div className='row'>
                    <div className='col'>
                        <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th className='text-center' scope='col'>Col</th>
                                <th className='text-center' scope='col'>Clues</th>
                            </tr>
                        </thead>
                        <tbody>
                        {infoCols.map((x) => {
                            return (
                                <tr key={(Math.random()*10000).toString()}>
                                    <td className='text-center'>{x[0]}</td>
                                    <td key={(Math.random()*10000).toString()}>{x[1].map((x)=>{return(<span key={(Math.random()*10000).toString()} style={{'paddingRight':'1rem'}}>{x}</span>)})}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                        </table>
                    </div>
                    <div className='col'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th className='text-center' scope='col'>Row</th>
                                <th className='text-center' scope='col'>Clues</th>
                            </tr>
                        </thead>
                        <tbody>
                        {infoRows.map((x) => {
                            return (
                                <tr key={(Math.random()*10000).toString()}>
                                    <td className='text-center'>{x[0]}</td>
                                    <td key={(Math.random()*10000).toString()}>{x[1].map((x)=>{return(<span key={(Math.random()*10000).toString()} style={{'paddingRight':'1rem'}}>{x}</span>)})}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                        </table>
                    </div>
                </div>

                <div className='card justify-items-center border-white'>
                    <h5 className='align-middle' style={{'paddingLeft':'1rem'}}>Lifes: {lifes}</h5>
                    <h6 className='align-middle' style={{'paddingLeft':'1rem'}}>Completness: {currentCells} / {totalCells} ({Math.round(currentCells / totalCells * 100)}%)</h6>
                </div>

                { board.map( x => { return (
                    <div className='d-flex flex-column' key={(Math.random()*10000).toString()}>
                        <div className='d-flex justify-content-center'>
                        {
                            x.map( x => { return (
                                <Cell key={(Math.random()*10000).toString()} value={x} lifes={lifes} setLifes={setLifes} currentCells={currentCells} setCurrentCells={setCurrentCells}/>
                            )})
                        }   
                        </div>
                    </div>
                )})}
            </div>

            <div className='container' style={{'paddingTop':'1rem', 'paddingLeft':'1rem'}}/>

            <div className='card justify-items-center border-white' style={{'display':lifes==0?'block':'none'}} >
                <h3 className='align-middle' style={{'paddingLeft':'1rem'}}>Lost...</h3>
            </div>

            <div className='card justify-items-center border-white' style={{'display':totalCells==currentCells&&infoCols.length>0?'block':'none'}} >
                <h3 className='align-middle' style={{'paddingLeft':'1rem'}}>Win...</h3>
            </div>


        </div>
    )
}

export default Nanogram