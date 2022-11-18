import infos from '../public/infos.json'
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'

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
    padding-top: 1rem;
`
const DarkParagraph = styled.p`
    font-size: 1rem;
    text-align: left;
    padding-left: 4rem;
    padding
`
const PillContainer = styled.ul`
    text-decoration: none;
    padding-left: 3.75rem;
    padding-bottom: 2rem;
    margin: 0;
`
const Pill = styled.li`
    display: inline-block;
    color: black;
    border: 2px solid black;
    background-color: #F7F7F2;
    font-size: 0.75rem;
    margin-right: 0.5rem;
    padding: 0.25rem;
    border-radius: 0.5rem;
`
const Projects = () => {
    return (
        <MainContainer>
            <Head><title>Projects</title></Head>

            <NeutralContainer>
                <LightTitle>Projects</LightTitle>
                <LightSubTitle>A list of personal projects that I made in my free time.</LightSubTitle>
                <LightSubSubTitle>Click on the project to access the repository on GitHub.</LightSubSubTitle>
            </NeutralContainer>

            {
                infos.projects.map(
                    xs => { return (
                        <Link href={xs.repo} key={xs.repo}>
                            <DarkContainer key={`container_${xs.name}`}>
                                <DarkTitle>{xs.title}</DarkTitle>
                                <DarkParagraph>Description: {xs.description}</DarkParagraph>
                                <DarkParagraph>Status: {xs.status}</DarkParagraph>
                                <PillContainer key={`${xs.name}`}>
                                    {xs.technologies.map( x => {
                                        return (<Pill key={`${x.name}.${x}`}>{x}</Pill>)
                                    })}
                                </PillContainer>
                            </DarkContainer>
                        </Link>
                    )}
                )
            }

        </MainContainer>
    )
}

export default Projects