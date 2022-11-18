import styled from 'styled-components'

const ListContainer = styled.div`
    font-family: Georgia, serif;
    background-color: #121113;
    color: white;
    text-align: center;
    padding: 0;
    margin: 0;
    border-style: solid;
    border-width: 0.1rem;
    position: fixed;
    bottom: 0;
    width:100vw;
`
const Phrase = styled.p`
    font-size: 0.75rem;
    padding: 0.5rem;
    margin: 0;

    &:hover {
        background-color: #F7F7F2;
        color: black;
    }
`

const Ftr = () => {
    return (
        <ListContainer>
            <Phrase>
                Developed using NextJS, Styled Componens and React Icons by Luis Pereira.
            </Phrase>
        </ListContainer>
    )
}

export default Ftr