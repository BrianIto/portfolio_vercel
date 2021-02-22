import React from 'react';
import styles from "../styles/Home.module.sass";
import axios from 'axios';

const PaginaInicial = ({ pageSelected }) => {

    const [overlay, setOverlay] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        try {
        const form = e.target;
        const [name, email] = [form.name.value, form.email.value];
        const response = await axios.post('https://api.brainstorm.qsimporta.com/twilio/twilio/send_wpp', {
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
    <React.Fragment>
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
                <input
                  name="phone"
                  placeholder="Phone"
                  className={styles.input}
                ></input> 
             </div>
             <button 
              type="submit"
              disabled={loading}
              className={styles.btn}>
                {loading ? "Loading" : "Submit!"}
              </button>
           </form>
        </div>
      </div>
      <div className={pageSelected === 0 ? styles.page : styles.page+" "+ styles.hidden} style={{display: 'flex'}}>
        <div className={styles.text}>
            <img style={{position: 'absolute', top: 10, left: 140, width: 150}} src="https://media.giphy.com/media/HSRadJ4iwheniijBX6/giphy.gif" />
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
    </React.Fragment>
    )
}

export default PaginaInicial;

