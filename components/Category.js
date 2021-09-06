import React from 'react'

import styles from '../styles/projects.module.scss'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

export const Category = ({name,color,image,description,web}) => {
    return (
        <div className="col m4">
            
            <div className=" text-left">
            

    <div className="card hoverable">
    <div  className={styles.meta}>
      <div  className={styles.photo} style={{backgroundImage: `url(${image})`}} ></div>
      
    </div>
      <div className="card-content">
      <div>
        <div className={styles.icon}>
    <span style={{backgroundColor:color}}>{description}</span>
  </div>
  
        </div>
        
       
        <span className="card-title activator grey-text text-darken-4">
         {name}
         
        </span>
        <div className={styles.card}>
        <span><a className={styles.website}  href={web} target='_blank' rel="noreferrer">Website</a></span>
         
        </div>
      </div>
     
    </div>
  </div>
        </div>
    )
}
