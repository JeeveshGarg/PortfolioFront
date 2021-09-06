import React from 'react'
import styles from '../styles/projects.module.scss'
import Head from 'next/head'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContentClassKey } from '@material-ui/core'
import { Collapse } from '@material-ui/core'



export const Projects = () => {

  

   

    return (
        <div class="container text-center">
          <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        
          </Head>
        <div class="row">
          <div>
       
           
        {/* hvxcbjhcs bhjdb kjadbf,skb,fvkndkjfbvsdkjhbszjh cjh sbfjvh bsjf bsjhbf hjsb sbvj s dj bakudvgqub  */}
        <div class="col m4">
        <div class=" text-left">
        <div class="card  hoverable">
        <div  className={styles.meta}>
      <div  className={styles.photo} style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"}} ></div>
      
    </div>
    <div class="card-content">
    <img src="https://img.shields.io/github/stars/JeeveshGarg/portfolio?style=flat-square" alt="Github Repo Star" style={{marginRight:"20px",
      marginBottom:"15px"}}></img>
        <img src="https://img.shields.io/github/forks/JeeveshGarg/portfolio?style=flat-square" alt="Github Repo Star" style={{marginRight:"20px",
      marginBottom:"15px"}}></img>
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
  <div  className={styles.icon}>
    <span className={styles.node}><span/></span>
  </div>
 
        </div>
       
        <span class="card-title activator grey-text text-darken-4">
         Project X
          <i class="material-icons right">more_vert</i>
        </span>
        <div className={styles.card}>
        <span><a className={styles.website}  href="#">Website</a></span>
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
   {/* hvxcbjhcs bhjdb kjadbf,skb,fvkndkjfbvsdkjhbszjh cjh sbfjvh bsjf bsjhbf hjsb sbvj s dj bakudvgqub  */}
   <div class="col m4">
        <div class=" text-left">
        <div class="card  hoverable">
        <div  className={styles.meta}>
      <div  className={styles.photo} style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"}} ></div>
      
    </div>
    <div class="card-content">
    <img src="https://img.shields.io/github/stars/JeeveshGarg/portfolio?style=flat-square" alt="Github Repo Star" style={{marginRight:"20px",
      marginBottom:"15px"}}></img>
        <img src="https://img.shields.io/github/forks/JeeveshGarg/portfolio?style=flat-square" alt="Github Repo Star" style={{marginRight:"20px",
      marginBottom:"15px"}}></img>
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
  <div  className={styles.icon}>
    <span className={styles.node}><span/></span>
  </div>
 
        </div>
       
        <span class="card-title activator grey-text text-darken-4">
         Project X
          <i class="material-icons right">more_vert</i>
        </span>
        <div className={styles.card}>
        <span><a className={styles.website}  href="#">Website</a></span>
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
   {/* hvxcbjhcs bhjdb kjadbf,skb,fvkndkjfbvsdkjhbszjh cjh sbfjvh bsjf bsjhbf hjsb sbvj s dj bakudvgqub  */}
   <div class="col m4">
        <div class=" text-left">
        <div class="card  hoverable">
        <div  className={styles.meta}>
      <div  className={styles.photo} style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"}} ></div>
      
    </div>
    <div class="card-content">
    <img src="https://img.shields.io/github/stars/JeeveshGarg/portfolio?style=flat-square" alt="Github Repo Star" style={{marginRight:"20px",
      marginBottom:"15px"}}></img>
        <img src="https://img.shields.io/github/forks/JeeveshGarg/portfolio?style=flat-square" alt="Github Repo Star" style={{marginRight:"20px",
      marginBottom:"15px"}}></img>
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
  <div  className={styles.icon}>
    <span className={styles.node}><span/></span>
  </div>
 
        </div>
       
        <span class="card-title activator grey-text text-darken-4">
         Project X
          <i class="material-icons right">more_vert</i>
        </span>
        <div className={styles.card}>
        <span><a className={styles.website}  href="#">Website</a></span>
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
   {/* hvxcbjhcs bhjdb kjadbf,skb,fvkndkjfbvsdkjhbszjh cjh sbfjvh bsjf bsjhbf hjsb sbvj s dj bakudvgqub  */}
   <div class="col m4">
        <div class=" text-left">
        <div class="card  hoverable">
        <div  className={styles.meta}>
      <div  className={styles.photo} style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"}} ></div>
      
    </div>
    <div class="card-content">
    <img src="https://img.shields.io/github/stars/JeeveshGarg/portfolio?style=flat-square" alt="Github Repo Star" style={{marginRight:"20px",
      marginBottom:"15px"}}></img>
        <img src="https://img.shields.io/github/forks/JeeveshGarg/portfolio?style=flat-square" alt="Github Repo Star" style={{marginRight:"20px",
      marginBottom:"15px"}}></img>
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
  <div  className={styles.icon}>
    <span className={styles.node}><span/></span>
  </div>
 
        </div>
       
        <span class="card-title activator grey-text text-darken-4">
         Project X
          <i class="material-icons right">more_vert</i>
        </span>
        <div className={styles.card}>
        <span><a className={styles.website}  href="#">Website</a></span>
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
   {/* hvxcbjhcs bhjdb kjadbf,skb,fvkndkjfbvsdkjhbszjh cjh sbfjvh bsjf bsjhbf hjsb sbvj s dj bakudvgqub  */}
   <div class="col m4">
        <div class=" text-left">
        <div class="card  hoverable">
        <div  className={styles.meta}>
      <div  className={styles.photo} style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"}} ></div>
      
    </div>
    <div class="card-content">
    <img src="https://img.shields.io/github/stars/JeeveshGarg/portfolio?style=flat-square" alt="Github Repo Star" style={{marginRight:"20px",
      marginBottom:"15px"}}></img>
        <img src="https://img.shields.io/github/forks/JeeveshGarg/portfolio?style=flat-square" alt="Github Repo Star" style={{marginRight:"20px",
      marginBottom:"15px"}}></img>
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
  <div  className={styles.icon}>
    <span className={styles.node}><span/></span>
  </div>
 
        </div>
       
        <span class="card-title activator grey-text text-darken-4">
         Project X
          <i class="material-icons right">more_vert</i>
        </span>
        <div className={styles.card}>
        <span><a className={styles.website}  href="#">Website</a></span>
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
        
       
          

      

        </div>
            
        </div>
        </div>
    )
}
