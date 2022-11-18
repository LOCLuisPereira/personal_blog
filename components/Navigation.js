import styled from 'styled-components'
import Link from 'next/link'

const ListContainer = styled.ul`
    font-family: Georgia, serif;
    background-color: #121113;
    color: white;

    text-decoration: none;
    padding: 0;
    margin: 0;
    border-style: solid;
    border-width: 0.1rem;
    position: fixed;
    top: 0;
    width: 100vw;
`
const ItemContainer = styled.li`
    display: inline-block;
    text-align: center;
    font-size: 1.25rem;
    margin: 0;
    padding: 0.5rem;
    &:hover {
        background-color: #F7F7F2;
        color: black;
    }
`
const Navigation = () => {
    return (
        <ListContainer>
            <ItemContainer>
                <Link href='/'>Home</Link>
            </ItemContainer>
            <ItemContainer>
                <Link href='/curriculum'>Curriculum</Link>
            </ItemContainer>
            <ItemContainer>
                <Link href='/projects'>Projects</Link>
            </ItemContainer>
            <ItemContainer>
                <Link href='/nanogram'>Nanogram</Link>
            </ItemContainer>
        </ListContainer>
    )
}

export default Navigation