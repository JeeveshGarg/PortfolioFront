import React from 'react'
import styles from '../styles/projects.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

import { CardContent, colors } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContentClassKey } from '@material-ui/core'
import { Collapse } from '@material-ui/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const Project = ({name,desc,need,webter,gitnew,image,tags}) => {
    const [stars, setStars] = React.useState("");
    const [forks, setforks] = React.useState("");
    const [git, setgit] = React.useState("");

    useEffect(() => {
      axios.get(`https://api.github.com/repos/JeeveshGarg/${gitnew}`)
  .then(res => {
      setgit(res.data.html_url);
      setStars(`https://img.shields.io/github/stars/JeeveshGarg/${gitnew}?style=flat-square`);
      setforks(`https://img.shields.io/github/forks/JeeveshGarg/${gitnew}?style=flat-square`);
  })
  .catch(err => {
      console.log(err)
  })
     
    })
   
    
    return (
     
            

       
      <div className="col m4">
      <div className=" text-left">
      <div className="card  hoverable">
      <div  className={styles.meta}>
      <div  className={styles.photo} style={{backgroundImage: `url(${image})`}} ></div>
    
  </div>
  <div className="card-content">
  <img  src = {stars} alt="Github Repo Star" style={{marginRight:"20px",
    marginBottom:"15px"}}></img >
      <img  src={forks} alt="Github Repo Star" style={{marginRight:"20px",
    marginBottom:"15px"}}></img>
      <div>
     
     {tags.map(tag => (
       <div key={tag.id} className={styles.icon}>
       <span key={tag.id} style={{backgroundColor: tag.color}}>{tag.name}</span>
       </div>
     ))}


      </div>
     
      <span className="card-title activator grey-text text-darken-4">
       {name}
        <i className="material-icons right">more_vert</i>
      </span>
      <div className={styles.card}>
      <span><a className={styles.website}  href={""+ webter} target='_blank' rel="noreferrer">Website</a></span>
        <span><a className={styles.github} href={git}>Github</a></span>
      </div>
  </div>
  <div className="card-reveal">
  <span className="card-title grey-text text-darken-4">{name}<i className="material-icons right">close</i></span>
      <div><span className={styles.status}>Live</span></div>
      <p>{desc}</p>
      <p><strong>Need:</strong></p>
      <p>{need}</p>
  </div>
</div>
</div>
</div>
         
          
        
    )
}
