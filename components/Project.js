import React from 'react'
import styles from '../styles/projects.module.scss'
import Head from 'next/head'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
export const Project = () => {

    
    return (
     
            

       
            <div class="col m4">
            
                <div class="card text-left">
                

        <div class="card hoverable" className={styles.card}>
          <div class="card-image waves-effect waves-block waves-light">
            <img className={styles.imgjj} style={{height:"220px", width:"720px", maxWidth:"400px"}} class="activator" src="/jeevesh.jpeg"/>
          </div>
          <div class="card-content">
            <div>
            <div className={styles.icon}>
        <span className={styles.django }><span/></span>
      </div>
      <div className={styles.icon}>
        <span className={styles.python}><span/></span>
      </div>
      <div  className={styles.icon}>
        <span className={styles.react}><span/></span>
      </div>
            </div>
            <span class="card-title activator grey-text text-darken-4">
             Project X
              <i class="material-icons right">more_vert</i>
            </span>
            <div>
              <span><a href="#">Website</a></span>
              <span><a className={styles.github} href="#">Github</a></span>
            </div>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Project X<i class="material-icons right">close</i></span>
            <div><span className={styles.status}>Live</span></div>
            <p>Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. </p>
            <p><strong>Need:</strong></p>
            <p>People with super powers</p>
          </div>
        </div>
      </div>
            </div>
         
          
        
    )
}
