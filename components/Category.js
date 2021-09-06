import React from 'react'

import styles from '../styles/projects.module.scss'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

export const Category = ({name,color,image,description,web}) => {
    return (
        <div class="col m4">
            
            <div class=" text-left">
            

    <div class="card hoverable">
    <div  className={styles.meta}>
      <div  className={styles.photo} style={{backgroundImage: `url(${image})`}} ></div>
      
    </div>
      <div class="card-content">
      <div>
        <div className={styles.icon}>
    <span style={{backgroundColor:color}}>{description}</span>
  </div>
  
        </div>
        
       
        <span class="card-title activator grey-text text-darken-4">
         {name}
         
        </span>
        <div className={styles.card}>
        <span><a className={styles.website}  href={web} target='_blank'>Website</a></span>
         
        </div>
      </div>
     
    </div>
  </div>
        </div>
    )
}
