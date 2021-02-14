import * as React from 'react';
import styles from './PageIntegraResults.module.sass';
import PageStyles from '../../styles/Home.module.sass';

const PageIntegraResults = ({pageSelected}) => {
    return (
        <section className={pageSelected === 2 ?
     PageStyles.page +" " + styles.section : styles.section+" "+ PageStyles.page+" "+ PageStyles.hidden}>
         <header>
            <h3>Case Study:</h3>
            <div style={{display: 'flex'}}>
                {/* Integra logo white */}
                <img src="https://app.integracps.com.br/static/media/integra_logo.ffdf0581.png"></img>
                <p>By IGOR SANTIAGO MARTINS, co-founder.</p>
            </div>
        </header>
        <section>
            <h1>Lead Results</h1>
            <div className={styles.full_content}>
                <div>
                    <div>
                        <h1>100%</h1>
                        <h2>Of reduction on human errors in 5 months (until today)</h2>
                    </div>
                    <div>
                        <div>
                            <h1>ZERO</h1>
                            <h2>Time consuption for recepcionists</h2>
                        </div>   
                        <p>Now they focus on delivering good services.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Snowball creators human mistakes: </h1>
                        <h2>Typo on scheduling days in Excel</h2>
                        <h2>Forgetting to clear daily sheets</h2>
                        <h2>Forgetting to launch payments</h2>
                        <h2>Typo in finances</h2>
                    </div>
                    <div>
                        <h1>From 15 min to 1 min</h1>
                        <h2>15 times faster scheduling</h2>
                        <p>Competitive Advantage: The fastest in the region.</p>
                    </div>
                </div>
            </div>
        </section>
     </section>
     )    
}

export default PageIntegraResults;