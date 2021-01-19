import useScript from '../hooks/useScript'
import styles from '../styles/Home.module.sass'
import FacebookIcon from "../public/facebook.svg";
import GithubIcon from "../public/github.svg";
import LinkedInIcon from "../public/linkedin-logo.svg";
import InstagramIcon from '../public/instagram.svg';
import WhatsappIcon from "../public/whatsapp.svg";
import Head from 'next/head';
import React from 'react';
import axios from 'axios';

export default function Home() {

  const [overlay, setOverlay] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
    const form = e.target;
    const [name, email] = [form.name.value, form.email.value];
    const response = await axios.post('http://api.brainstorm.qsimporta.com:3333/send_wpp', {
        message: "Novo usuário cadastrado para Lead:\n" +
          "*Nome*: " + name + "\n" +
          "*E-mail*: " + email,
        nome: name
      })
    } catch(e) {
      alert("Erro ao enviar seus dados... :(\n Erro: "+e);
    }
    setLoading(false);
  }


  return (
    <div className={styles.container}>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JT45FFM835" > </script> 
        <script >
          {`window.dataLayer = window.dataLayer || [];

        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-JT45FFM835");`} 
        </script>
        <title>Brian Ito - Web Developer</title>
      </Head>
      <div className={overlay ? styles.modal : styles.modal + " " + styles.hidden}>
        <div>
          <h1>Let's Talk!</h1>
          <p>Please, fill your <b>name</b> and your <b>e-mail</b> below and I will
           contact you pretty soon! Get in touch.</p>
           <form onSubmit={onSubmit}>
             <div className={styles.inputs}>
               <input 
                  name="name" 
                  required
                  type="text" 
                  placeholder="Name" 
                  className={styles.input}></input>
               <input 
                  name="email" 
                  required
                  type="email" 
                  placeholder="E-mail" 
                  className={styles.input}></input> 
             </div>
             <button 
              type="submit"
              disabled={loading}
              className={styles.btn}>
                {loading ? "Carregando" : "Confirmar"}
              </button>
           </form>
        </div>
      </div>
      <div className={styles.icons}>
        <FacebookIcon onClick={() => onClick('facebook')} className={styles.svg} />
        <GithubIcon onClick={() => onClick('github')} className={styles.svg}/>
        <LinkedInIcon onClick={() => onClick('linkedin')} className={styles.svg}/>
        <InstagramIcon onClick={() => onClick('instagram')} className={styles.svg}/>
        <WhatsappIcon onClick={() => onClick('whatsapp')} className={styles.svg}/>
      </div>
      <div className={styles.text}>
        <h2>Hey, I'm Brian.</h2>
        <h1>Building Technology To Simplify Processes.</h1>
        <p> Doing something must be useful and / or delightful. If it is not, probably your collaborators or you would be thinking about doing something
        else. People get stressed and that stress lead to mistakes, mistakes leads to more work, and people get even more stressed. Stop the cycle.
        Let catalysts do the work for you. </p>
        <button onClick={() => {
          setOverlay(true);
        }}>I want to Automatize!</button>
      </div>
      <img src="./Grupo8.png" className={styles.picture}/>
      <div 
        onClick={() => setOverlay(false)}
        className={
          overlay ? styles.overlay :
          styles.overlay+" "+styles.hidden}></div>
    </div>
  )
}
