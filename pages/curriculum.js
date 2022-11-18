import { ImBook, ImBooks } from 'react-icons/im'
import { ImSearch } from 'react-icons/im'
import { BiMedal } from 'react-icons/bi'
import { GiDiploma, GiStack } from 'react-icons/gi'

import {SiBootstrap, SiCplusplus, SiCss3, SiFastapi, SiFedora, SiHtml5, SiJava, SiJavascript, SiLatex, SiLinux, SiLinuxmint, SiMacos, SiManjaro, SiMongodb, SiNextdotjs, SiNumpy, SiOcaml, SiOverleaf, SiPandas, SiPopos, SiPostgresql, SiPython, SiPytorch, SiReact, SiRedis, SiUbuntu, SiGraphql, SiVisualstudiocode} from 'react-icons/si'

import infos from '../public/infos.json'
import styled from 'styled-components'
import Head from 'next/head'

/* CONTAINERS */
const MainContainer = styled.div`
    padding: 0.01rem;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    background-color: #F7F7F2;
    width:100wh;
    height:100vh;
    overflow: scroll
`
const DarkContainer = styled.div`
    border-style: solid;
    border-width: 0.1rem;
    background-color: #222725;
    margin-top : 4rem;
    margin-left : 4rem;
    margin-right : 4rem;
    margin-bottom : 4rem;
    box-shadow: 10px 10px #121113;
`
const DarkTitle = styled.h1`
    color: white;
    font-family: Georgia, serif;
    font-size: 1.5rem;
    text-align:center;
    padding: 1rem;
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
    font-size: 2rem;
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
const LightParagraph = styled.p`
    color: black;
    font-family: Georgia, serif;
    font-size: 1rem;
    text-align:left;
    padding-left: 3rem;
`
const Icon = styled.span`
    font-size: 2.5rem;
    padding-right: 1rem;
    vertical-align: middle;
`
const Breaker = styled.hr`
    padding-top: 0;
    margin-top: 0;
`
const PillContainer = styled.ul`
    text-decoration: none;
    padding-left: 3rem;
    margin: 0;
`
const Pill = styled.li`
    display: inline-block;
    color: white;
    border: 2px solid black;
    background-color: black;
    font-size: 0.75rem;
    margin-right: 0.5rem;
    padding: 0.25rem;
    border-radius: 0.5rem;
`
const StackContainer = styled.p`
    text-align:center
`
const StackWrapper = styled.a`
    text-align: center;
    font-size: 4rem;
    padding-right: 0.25rem;
`
/* MODULES */
const Education = ({xs}) => {
    return (<div>
        {xs.map(
            xs => {
                return <LightParagraph key={xs.name}>
                    <strong>{xs.name}</strong>, {xs.institution}, {xs.start}-{xs.end}.
                </LightParagraph>
            }
        )}
    </div>)
}
const Research = ({xs}) => {
    return (<div>
        {xs.map(
            xs => {
                return <div key={xs.position}>
                    <LightParagraph>
                        <strong>{xs.position}</strong>, {xs.description},
                        {xs.institution}, {xs.start}-{xs.end}.
                    </LightParagraph>
                    <PillContainer>
                        {xs.tags.map(x => {return <Pill key={`${xs.name}.${x}`}>{x}</Pill>})}
                    </PillContainer>
                </div>
            }
        )}
    </div>)
}
const Competion = ({xs}) => {
    return (<div>
        {xs.map(
            xs => {
                return <LightParagraph key={xs.name}>
                    <strong>{xs.name}</strong>, {xs.location}, {xs.year}.
                </LightParagraph>
            }
        )}
    </div>)
}
const Certificates = ({xs}) => {
    return (<div>
        {xs.map(
            xs => {
                return <LightParagraph key={xs.name}>
                    <strong>{xs.name}</strong>, {xs.platform}, {xs.date}.
                </LightParagraph>
            }
        )}
    </div>)
}
const Curriculum = () => {
    return (
        <MainContainer>
            <Head><title>Curriculum</title></Head>

            {/* MOTIVATION */}
            <DarkContainer>
                <DarkTitle>{infos.curriculum.motivation}</DarkTitle>
            </DarkContainer>

            {/* Stack */}
            <NeutralContainer>
                <LightTitle>
                    <Icon><GiStack/></Icon>
                    Stack
                </LightTitle>
                <Breaker/>
                    <StackContainer>
                        <StackWrapper><SiPython/></StackWrapper>
                        <StackWrapper><SiJavascript/></StackWrapper>
                        <StackWrapper><SiCplusplus/></StackWrapper>
                        <StackWrapper><SiOcaml/></StackWrapper>
                        <StackWrapper><SiJava/></StackWrapper>
                        <StackWrapper><SiMongodb/></StackWrapper>
                        <StackWrapper><SiRedis/></StackWrapper>
                        <StackWrapper><SiPostgresql/></StackWrapper>
                    </StackContainer>
                    <StackContainer>
                        <StackWrapper><SiNumpy/></StackWrapper>
                        <StackWrapper><SiPandas/></StackWrapper>
                        <StackWrapper><SiPytorch/></StackWrapper>
                        <StackWrapper><SiFastapi/></StackWrapper>
                        <StackWrapper><SiNextdotjs/></StackWrapper>
                        <StackWrapper><SiReact/></StackWrapper>
                        <StackWrapper><SiGraphql/></StackWrapper>
                        <StackWrapper><SiHtml5/></StackWrapper>
                        <StackWrapper><SiCss3/></StackWrapper>
                        <StackWrapper><SiBootstrap/></StackWrapper>
                    </StackContainer>
                    <StackContainer>
                        <StackWrapper><SiMacos/></StackWrapper>
                        <StackWrapper><SiLinux/></StackWrapper>
                        <StackWrapper><SiUbuntu/></StackWrapper>
                        <StackWrapper><SiManjaro/></StackWrapper>
                        <StackWrapper><SiPopos/></StackWrapper>
                        <StackWrapper><SiLinuxmint/></StackWrapper>
                        <StackWrapper><SiFedora/></StackWrapper>
                        <StackWrapper><SiVisualstudiocode/></StackWrapper>
                        <StackWrapper><SiOverleaf/></StackWrapper>
                        <StackWrapper><SiLatex/></StackWrapper>
                    </StackContainer>
            </NeutralContainer>

            {/* EDUCATION */}
            <NeutralContainer>
                <LightTitle>
                    <Icon><ImBooks/></Icon>
                    Education
                </LightTitle>
                <Breaker/>
                <Education xs={infos.curriculum.education}/>
            </NeutralContainer>

            {/* RESEARCH */}
            <NeutralContainer>
                <LightTitle>
                    <Icon><ImSearch/></Icon>
                    Research
                </LightTitle>
                <Breaker/>
                <Research xs={infos.curriculum.research}/>
            </NeutralContainer>

            {/* EDUCATION */}
            <NeutralContainer>
                <LightTitle>
                    <Icon><BiMedal/></Icon>
                    Competitions
                </LightTitle>
                <Breaker/>
                <Competion xs={infos.curriculum.competitions}/>
            </NeutralContainer>

            {/* EDUCATION */}
            <NeutralContainer>
                <LightTitle>
                    <Icon><GiDiploma/></Icon>
                    Certificates
                </LightTitle>
                <Breaker/>
                <Certificates xs={infos.curriculum.certificates}/>
            </NeutralContainer>

        </MainContainer>
    )
}

export default Curriculum