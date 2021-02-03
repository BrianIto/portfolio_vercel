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

export default function Home() {

  const pageRef = React.useRef({
    value: 0,
    up() { this.value++ },
    down() { this.value-- }
  });

  const [lastScroll, setLastScroll] = React.useState(0);

  useScript('./test.js')

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

  React.useImperativeHandle(
    (pageRef),
    () => ({ value: 0,
      up() { this.value-- },
      down() { this.value++ }
    }),
    [],
  )

  const scrollEvent = (e) => {
    let sTop = e.target.lastChild.scrollTop;    
    window.removeEventListener('scroll', scrollEvent);
    setTimeout(() => {
      window.addEventListener('scroll', scrollEvent);
    }, 400);
    if (lastScroll < sTop) {
      pageRef.current.down();
      console.log('scroll down');
    } else {
      pageRef.current.up();
      console.log('scroll up');
    }
    setLastScroll(e.target.lastChild.scrollTop);
  }

  React.useEffect(() => {
    pageRef.current.initialize;
    window.addEventListener('scroll', scrollEvent)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JT45FFM835" > </script> 
        <script src="/ga.js"></script>
        <title>Brian Ito - Web Developer</title>
      </Head>
      <div className={styles.icons}>
        <FacebookIcon onClick={() => onClick('facebook')} className={styles.svg} />
        <GithubIcon onClick={() => onClick('github')} className={styles.svg}/>
        <LinkedInIcon onClick={() => onClick('linkedin')} className={styles.svg}/>
        <InstagramIcon onClick={() => onClick('instagram')} className={styles.svg}/>
        <WhatsappIcon onClick={() => onClick('whatsapp')} className={styles.svg}/>
      </div>
      <PaginaInicial pageSelected={pageRef.current.value} />
      <PageIntegraCase pageSelected={pageRef.current.value} />
    </div>
  )
}
