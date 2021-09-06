import React from 'react'
import styles from '../styles/Layout.module.scss'
import Link from 'next/link'
import Head from 'next/head'
import { faMailBulk, faBrain} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faGithub, faInstagram, faLinkedin,faCalendly} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'


export const Layout = ({children}) => {

const [collesped, setCollapsed] = React.useState(true);

const func=()=>{
  console.log(collesped)
  if(collesped){
    setCollapsed(false);
    console.log(collesped)
 

  

   }
   else{
    setCollapsed(true);
    console.log(collesped)
    
   }
   }
   
  return (
        <div>
        <Head>
          <title>My page</title>
          <link rel="icon" href="/favicon.ico" />
     
       
       
        
       

        </Head>
            <nav >
  <div className={styles.navbar} >
    
    <div className={styles.logo}>JG</div>
    <div className={styles.burger}>
      {collesped ?  <span className={`material-icons ${styles.icon}`}   onClick={func}>menu</span> :  <span className={`material-icons ${styles.icon}`}   onClick={()=>{func()}}>close</span> }
   
    </div>
    <ul  className={styles.navList} >
      <li><Link href="/">Home</Link></li>
      <li> <Link href='/about'>Blogs</Link></li>
      
      <li ><Link href="/projects" >Projects</Link></li>
      <li ><Link href="/category" >Categories</Link></li>
      <li ><Link href="/work" >work/education</Link></li>
      <li ><Link href="#" >My Resume</Link></li>
    </ul>
  </div>
  <div className={styles.dropdown} style={{
    maxHeight:collesped ? 0 : "100vh",
    transition: "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
    
  }} >
    <ul className={styles.navList} >
    <li onClick={()=>{func()}}><Link href="/"  >Home</Link></li>
      <li onClick={()=>{func()}}> <Link href='/about'  >Blogs</Link></li>
      
      <li onClick={()=>{func()}}><Link href="/projects"  >Projects</Link></li>
      <li  onClick={()=>{func()}} ><Link href="/category" >Categories</Link></li>
      <li  onClick={()=>{func()}}><Link href="/work" >work/education</Link></li>
      <li onClick={()=>{func()}}><Link href="#"  >My Resume</Link></li>
    </ul>
  </div>
</nav>

  <div>
    {children}
  </div>

  <footer className="text-center text-white" style={{backgroundColor:"#023047"}}>
 
  <div className="container p-4">

   
    <section className="mb-4">
     
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="https://www.facebook.com/jeevesh.garg.52" role="button" target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} style={{height:"28px", width:"28px"}}></FontAwesomeIcon>
      </a>

    
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#55acee"}}  href="https://in.linkedin.com/in/jeevesh-garg-2130b3203" role="button" target='_blank' rel="noreferrer">
      <FontAwesomeIcon icon={faLinkedin} style={{height:"28px", width:"28px"}} ></FontAwesomeIcon>
      </a>

    

      
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "red"}}  href="mailto:jeevesh.garg.cd.civ20@itbhu.ac.in">
      <FontAwesomeIcon icon={faMailBulk} style={{height:"28px", width:"28px"}} ></FontAwesomeIcon>
      </a>

      
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#bc2a8d"}}  href="https://www.instagram.com/gargjeevesh60/" role="button" target='_blank' rel="noreferrer">
     
      <FontAwesomeIcon icon={faInstagram} style={{height:"28px", width:"28px"}} ></FontAwesomeIcon>
      </a>

      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}}  href="https://github.com/JeeveshGarg" role="button" target='_blank'  rel="noreferrer">
      <FontAwesomeIcon icon={faGithub} style={{height:"28px", width:"28px"}} ></FontAwesomeIcon>
      </a>
    </section>
   



    
    
   


  </div>
 
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)", color:"#FB8500"}} >
    © 2021 Copyright:
    <span  style={{ color:"#FB8500", textDecoration:"none"}} > Jeevesh Garg</span>
  </div>
 

</footer>


        </div>
    )
}
