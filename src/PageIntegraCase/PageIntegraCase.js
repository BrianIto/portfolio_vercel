import React from 'react';
import styles from "./PageIntegraCase.module.sass";
import PageStyles from "../../styles/Home.module.sass";

const PageIntegraCase = ({pageSelected}) => {


    return (<section className={pageSelected === 1 ?
     PageStyles.page +" " + styles.section : styles.section+" "+ PageStyles.page+" "+ PageStyles.hidden}>
         
        <header>
            <h3>Case Study:</h3>
            <div style={{display: 'flex'}}>
                {/* Integra logo white */}
                <img src="https://app.integracps.com.br/static/media/integra_logo.ffdf0581.png"></img>
                <p>By IGOR SANTIAGO MARTINS, co-founder.</p>
            </div>
        </header>
        <article>
            <p>Integra is a company that hourly rents physical space
                 for psychologists, physical therapists
                and other health related professionals.</p>
        </article>
        <quote>
            <img src="/quote.svg"></img>
            <h2>The main goal was to reduce time and human errors, 
                our biggest problems. <span>co-founder.</span></h2>
        </quote>
        <article style={{marginLeft: 25}}>
            <p>One of the processes that was updated was scheduling. The old process:</p>
            <img src="/old.svg"></img>
        </article>
        <article style={{marginLeft: 25}}>
            <p>The new process:</p>
            <img src="/new.svg"></img>
        </article>
    </section>)
}

export default PageIntegraCase;