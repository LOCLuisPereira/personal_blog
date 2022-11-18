import infos from '../public/infos.json'
import styled from 'styled-components'
import Head from 'next/head'

import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsMailbox} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

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
const LightContainer = styled.div`
  border-style: solid;
  border-width: 0.1rem;
  background-color: #E4E6C3;
  margin-top : 2rem;
  margin-left : 2rem;
  margin-right : 2rem;
  box-shadow: 5px 5px #899878;
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
const LightParagraph = styled.p`
  color: black;
  font-family: Georgia, serif;
  font-size: 1rem;
  text-align:left;
  padding-left: 4rem;
`
const DarkContainer = styled.div`
  border-style: solid;
  border-width: 0.1rem;
  background-color: #222725;
  margin-top : 4rem;
  margin-left : 4rem;
  margin-right : 4rem;
  margin-bottom : 4rem;
  box-shadow: 15px 15px #121113;
`
const DarkTitle = styled.h1`
  color: white;
  font-family: Georgia, serif;
  font-size: 2.5rem;
  text-align:center;
  padding: 1rem;
`
const Icon = styled.span`
  font-size: 1.5rem;
  padding-right: 1rem;
  vertical-align: middle;
`

const Home = () => {
  return (
    <MainContainer>
      <Head><title>Luis Pereira</title></Head>

      <NeutralContainer>
        <LightTitle>Luis Pereira</LightTitle>
        <LightSubTitle>{infos.infos.current_tole}</LightSubTitle>
      </NeutralContainer>

      <DarkContainer>
        <DarkTitle>{infos.home.presentation}</DarkTitle>
      </DarkContainer>
    
      <NeutralContainer>
        <LightSubTitle>Where can you find me?</LightSubTitle>
        <LightParagraph><Icon><BsMailbox/></Icon> {infos.infos.email}</LightParagraph>
        <LightParagraph><Icon><BsLinkedin/></Icon> {infos.infos.linkedin}</LightParagraph>
        <LightParagraph><Icon><BsFillTelephoneFill/></Icon> {infos.infos.phone}</LightParagraph>
        <LightParagraph><Icon><BsGithub/></Icon> {infos.infos.github}</LightParagraph>
        <LightParagraph><Icon><BsMedium/></Icon> {infos.infos.medium}</LightParagraph>
      </NeutralContainer>
    </MainContainer>
  )
}

export default Home