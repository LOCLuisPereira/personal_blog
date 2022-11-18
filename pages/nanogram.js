import styled from 'styled-components'
import {use, useState} from 'react'
import Head from 'next/head'

/* WRAPPERS */
const MainContainer = styled.div`
    padding: 0.01rem;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    background-color: #F7F7F2;
    width:100wh;
    height:100vh;
    overflow: scroll
`
const NeutralContainer = styled.div`
    background-color: #F7F7F2;
    margin-top : 2rem;
    margin-left : 2rem;
    margin-right : 2rem;
`
const LightTitle = styled.h1`
    color: black;
    font-family: Georgia, serif;
    font-size: 2.5rem;
    text-align:left;
    padding-left: 2rem;
`
const LightSubTitle = styled.h2`
    color: black;
    font-family: Georgia, serif;
    font-size: 1.5rem;
    text-align:left;
    padding-left: 2rem;
`
const LightSubSubTitle = styled.h2`
    color: black;
    font-family: Georgia, serif;
    font-size: 1rem;
    text-align:left;
    padding-left: 2rem;
`
const DarkContainer = styled.div`
    font-family: Georgia, serif;
    color: white;
    border-style: solid;
    border-width: 0.1rem;
    background-color: #222725;
    margin-top : 4rem;
    margin-left : 4rem;
    margin-right : 4rem;
    margin-bottom : 4rem;
    box-shadow: 15px 15px #121113;

    &:hover{
        background-color: #899878;
        color: black;
    }
`
const DarkTitle = styled.h1`
    font-size: 1.5rem;
    text-align:center;
`
const Table = styled.table`
    width: 70vw;
    margin-left: 15vw;
    margin-right: 15vw;
    margin-top: 1.5rem;
    border-style: solid;
    border-width: 0.1rem;
    box-shadow: 15px 15px #121113;
`
const TableHead = styled.thead`
    background-color: #121113;
    color: white;
`
const TableHeadCellsLeft = styled.th`
    width: 30%;
`
const TableHeadCellsRight = styled.th`
    width: 70%;
`
const TableBodyCellsLeft = styled.td`
    text-align: center;
`
const TableBodyCellsRightInside = styled.td`
    padding-left: 2rem;
`
const BoardTable = styled.table`
    margin-left: 22vw;
    margin-right: 28vw;
    width:50vw;
    margin-bottom: 5rem;
    margin-top: 2rem;
    border-style: solid;
    border-width: 0.1rem;
    box-shadow: 15px 15px #121113;
`
/* CONTAINERS */
const TableClues = ({name, xs}) => {
    return (
        <Table>
        <TableHead>
            <tr>
                <TableHeadCellsLeft className='text-center' scope='col'>{name}</TableHeadCellsLeft>
                <TableHeadCellsRight className='text-center' scope='col'>Clues </TableHeadCellsRight>
            </tr>
        </TableHead>
        <tbody>
        {xs.map((x) => {
            return (
                <tr key={`${name}_${Math.random()*1000}`}>
                    <TableBodyCellsLeft className='text-center'>{x[0]}</TableBodyCellsLeft>
                    <td key={`${name}_outside_${Math.random()*1000}`}>
                        {x[1].map((x)=>{
                            return(
                                <TableBodyCellsRightInside key={`${name}_inside_${Math.random()*1000}`}>
                                    {x}
                                </TableBodyCellsRightInside>)})}
                    </td>
                </tr>
            )
        })}
        </tbody>
        </Table>
    )
}

const Nanogram = () => {
    const [game, setGame] = useState({
        'size' : -1,
        'difficulty' : '.',
        'total' : 0,
        'board' : [],
        'xsCols' : [],
        'xsRows' : [],
        'lifes': 3,
        'correct': 0 
    })

    const [settings, setSettings] = useState({
        'showSize' : true,
        'showDiff' : false,
        'showGame' : false,
        'showEnd':false
    })
    const sizes = [5,10,15]
    const diffs = ['easy', 'medium', 'hard', 'impossible']

    /* DELIVERS THE ODDS ACCORDING TO THE DIFFICULTY */
    const f = (difficulty) => {
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

    /* REDUCES A ROW OR COLUMNS */
    const freduce = (v) => {
        var fv = []
        for (let idx = 0; idx<parseInt(game.size); idx++){
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

    /* REDUCES THE WHOLE MATRIX */
    const reduce = (matrix) => {
        var tmp = []
        for (let i=0; i<parseInt(game.size); i++){
            tmp.push(freduce( matrix[i] ))
        }
        return tmp
    }

    /* GENERATES BOARD AND REDUCES IT PASS FROM 1-1-0 TO 2-0 AND SO ON */
    const generateBoard = (difficulty) => {
        var infoCols_ = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
        var infoRows_ = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
        var board_ = []
        var tst = 0
        for (let i=0; i<parseInt(game.size); i++){
            var col = []
            for (let j=0; j<parseInt(game.size); j++){
                const value = f(difficulty)
                
                tst = tst + value

                col.push(value)
                infoCols_[j].push(value)
                infoRows_[i].push(value)
            }
            board_.push(col)
        }

        game.total = tst
        game.difficulty = difficulty
        for (let i=0; i<board_.length; i++){
            game.board.push(board_[i])
        }

        var cols = reduce(infoCols_)
        var rows = reduce(infoRows_)
        
        for (let i = 0; i<parseInt(game.size); i++){
            game.xsCols.push( [i, cols[i]] )
            game.xsRows[i] = [i, rows[i]]

        }
    }

    const Cell = ({value}) => {
        
        const [innerSettings, setInnerSettings] = useState({
            'disabled' : false,
            'vs' : 0
        })
        
        const widthVal = game.size==5?'15vh':(game.size==10?'8vh':'5vh')
        
        const g = (event) => {
            event.preventDefault()
            if (!innerSettings.disabled) {

                setInnerSettings({...innerSettings,disabled:true})
                
                if (value == 1){
                    setInnerSettings({...innerSettings,vs:1})

                    setGame({...game,correct:game.correct+1})
                    if (game.correct+1 >= game.total ) {
                        settings.showGame = false
                        settings.showEnd = true
                    }
                } else {
                    innerSettings.v2 = 2
                    setInnerSettings({...innerSettings,vs:1})
                    if (game.lifes <= 1 ) {
                        settings.showGame = false
                        settings.showEnd = true
                    }
                }
            }
        }
        

        return (
            <td
                onClick={(e) => g(e)}
                style={{
                    'backgroundColor': innerSettings.vs == 1 ? '#121113' : innerSettings.vs == 2 ? '#899878' : '#F7F7F2',
                    'borderStyle': 'solid',
                    'borderWidth': '0.05rem',
                    'height':`${widthVal}`,
                    'margin':'0.25vh'
                }}
            />
        )
    }

    return (
        <div>
            <Head><title>Nanogram</title></Head>
            
            <MainContainer>

                <NeutralContainer>
                    <LightTitle>Nanogram</LightTitle>
                    <LightSubSubTitle style={{'display':settings.showSize?'block':'none'}}>Select board size...</LightSubSubTitle>
                    <LightSubSubTitle style={{'display':settings.showDiff?'block':'none'}}>Select game difficulty...</LightSubSubTitle>

                    {/* BOARD SIZE MENU */}
                    <div style={{'display':settings.showSize?'block':'none'}}>
                        {sizes.map(
                            x => { return (
                                <DarkContainer key={`size_${Math.random()*1000}`}>
                                    <DarkTitle onClick={() => {
                                        setGame({...game, 'size':x})
                                        setSettings({...settings, 'showSize':false, 'showDiff':true})
                                    }}>{`${x}x${x}`}</DarkTitle>
                                </DarkContainer>
                            )
                        })}
                    </div>

                    {/* DIFFICULTY SIZE MENU */}
                    <div style={{'display':settings.showDiff?'block':'none'}}>
                        {diffs.map(
                            x => { return (
                                <DarkContainer key={`diffs_${x}`}>
                                    <DarkTitle onClick={() => {
                                        setSettings({...settings, 'showDiff':false, 'showGame':true})
                                        generateBoard(x)
                                    }}>{`${x}`}</DarkTitle>
                                </DarkContainer>
                            )
                        })}
                    </div>

                    {/* GAME BOARD */}
                    <div style={{'display':settings.showGame?'block':'none'}}>
                        <LightSubSubTitle>{`Size of the board set to ${game.size}x${game.size}.`}</LightSubSubTitle>
                        <LightSubSubTitle>{`Difficulty set to ${game.difficulty}.`}</LightSubSubTitle>

                        <LightSubTitle>Remmaining Lifes: {game.lifes}</LightSubTitle>
                        <LightSubSubTitle>Completeness: {game.correct} / {game.total} ({Math.round(game.correct / game.total * 100)}%)</LightSubSubTitle>

                        <TableClues name={'Columns'} xs={game.xsCols}/>
                        <TableClues name={'Rows'} xs={game.xsRows}/>

                        <BoardTable>
                        <tbody>
                        { game.board.map( x => { return (
                                <tr key={`table_something_${Math.random()*1000}`}>
                                {
                                    x.map( x => { return (
                                        <Cell value={x} key={`cell_${Math.random()*1000}`}/>
                                    )})
                                } 
                                </tr>
                        )})}
                        </tbody>
                        </BoardTable>
                    </div>

                    {/* FINAL MESSAGE */}
                    <div style={{'display':settings.showEnd?'block':'none'}}>
                        <div style={{'display':game.correct == game.total ? 'block':'none'}}>
                            <LightTitle>You Win!</LightTitle>
                        </div>
                        <div style={{'display':game.lifes == 0 ? 'block':'none'}}>
                            <LightTitle>You Lose...</LightTitle>
                        </div>
                    </div>

                </NeutralContainer>

            </MainContainer>

        </div>
    )
}

export default Nanogram