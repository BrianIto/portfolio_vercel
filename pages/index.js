import useScript from '../hooks/useScript'
import styles from '../styles/Home.module.sass'
import FacebookIcon from "../public/facebook.svg";
import GithubIcon from "../public/github.svg";
import LinkedInIcon from "../public/linkedin-logo.svg";
import InstagramIcon from '../public/instagram.svg';
import WhatsappIcon from "../public/whatsapp.svg";
import Head from 'next/head';
import React from 'react';
import PaginaInicial from '../src/PageInicial'
import PageIntegraCase from '../src/PageIntegraCase/PageIntegraCase'
import debounce from 'debounce'

export default function Home() {
  
  useScript('./test.js')

  const [selectedPage, setSelectedPage] = React.useState(0);
  const [ts, setTS] = React.useState(0);
  const [tE, setTE] = React.useState(0);
  const urls = {
    facebook: 'https://www.facebook.com/BriianIto',
    github: 'https://github.com/BrianIto',
    linkedin: 'https://www.linkedin.com/in/brian-ito-de-oliveira-moura-a5400119b/',
    whatsapp: 'https://api.whatsapp.com/send?phone=5592984374357&text=Olá,%20Te%20achei%20pelo%20seu%20Site!',
    instagram: 'https://www.instagram.com/eu.brian/'
  }

  const onClick = (type) => {
    window.open(urls[type]);
  }

  const changePage = (up) => {
    if (up) {
       (selectedPage === 0) ? '' : setSelectedPage(selectedPage - 1);
    } else {
        (selectedPage === 1) ? '' : setSelectedPage(selectedPage + 1);
    }
  }

  const onWheel = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
          changePage(true);
        } else {
          changePage(false);
        }
  }

  return (
    <div onWheel={debounce(onWheel, 210)} 
      onTouchStart={e => {
        setTS(e.nativeEvent.touches[0].clientY)
      }}
      onTouchEnd={e => {
        let tEnd = e.nativeEvent.changedTouches[0].clientY;
        if (ts > tEnd + 5) {
        //  console.log('scrollTop')
          changePage(false)
      } else if (ts === tEnd) {
          console.log('click')
        } else {
          changePage(true)
          console.log('scrollDown')
        }
        setTS(0);
      }}>
      <div className={styles.scroll_detector} />
      <div className={styles.container}>
        <Head>
          <script 
            async 
            src="https://www.googletagmanager.com/gtag/js?id=G-JT45FFM835"/> 
          <script src="/ga.js"/>
          <title>Brian Ito - Web Developer</title>
        </Head>
        <div className={styles.icons}>
          <FacebookIcon 
            onClick={() => onClick('facebook')} 
            className={styles.svg} />
          <GithubIcon 
            onClick={() => onClick('github')} 
            className={styles.svg}/>
          <LinkedInIcon 
            onClick={() => onClick('linkedin')} 
            className={styles.svg}/>
          <InstagramIcon 
            onClick={() => onClick('instagram')} 
            className={styles.svg}/>
          <WhatsappIcon 
            onClick={() => onClick('whatsapp')} 
            className={styles.svg}/>
        </div>
        <PaginaInicial pageSelected={selectedPage} />
        <PageIntegraCase pageSelected={selectedPage} />
      </div>
    </div>
  )
}
