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
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
       <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
       <script type="text/javascript" src="js/materialize.min.js"></script>
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        <script src="https://kit.fontawesome.com/e20sdfsd9.js" crossOrigin="anonymous"></script>
       
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      
        </Head>
            <nav >
  <div className={styles.navbar} >
    
    <div className={styles.logo}>JG</div>
    <div className={styles.burger}>
      {collesped ?  <span class="material-icons" className={styles.icon}  onClick={func}>menu</span> :  <span class="material-icons" className={styles.icon}  onClick={()=>{func()}}>close</span> }
   
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

  <footer class="text-center text-white" style={{backgroundColor:"#023047"}}>
 
  <div class="container p-4">

   
    <section class="mb-4">
     
      <a class="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="#!" role="button">
        <FontAwesomeIcon icon={faFacebook} style={{height:"28px", width:"28px"}}></FontAwesomeIcon>
      </a>

    
      <a class="btn btn-primary btn-floating m-1" style={{backgroundColor: "#55acee"}}  href="#!" role="button">
      <FontAwesomeIcon icon={faLinkedin} style={{height:"28px", width:"28px"}} ></FontAwesomeIcon>
      </a>

    

      
      <a class="btn btn-primary btn-floating m-1" style={{backgroundColor: "red"}}  href="mailto:jeevesh.garg.cd.civ20@itbhu.ac.in">
      <FontAwesomeIcon icon={faMailBulk} style={{height:"28px", width:"28px"}} ></FontAwesomeIcon>
      </a>

      
      <a class="btn btn-primary btn-floating m-1" style={{backgroundColor: "#bc2a8d"}}  href="#!" role="button">
     
      <FontAwesomeIcon icon={faInstagram} style={{height:"28px", width:"28px"}} ></FontAwesomeIcon>
      </a>

      <a class="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}}  href="#!" role="button">
      <FontAwesomeIcon icon={faGithub} style={{height:"28px", width:"28px"}} ></FontAwesomeIcon>
      </a>
    </section>
   



    
    
   


  </div>
 
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)", color:"#FB8500"}} >
    © 2021 Copyright:
    <span  style={{ color:"#FB8500", textDecoration:"none"}} > Jeevesh Garg</span>
  </div>
 

</footer>


        </div>
    )
}
