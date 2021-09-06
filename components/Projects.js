import React from 'react'
import styles from '../styles/projects.module.scss'
import Head from 'next/head'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContentClassKey } from '@material-ui/core'
import { Collapse } from '@material-ui/core'
import { Project } from './Project'
import axios from 'axios'
import router, { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'


export const Projects = () => {
const  router=useRouter()

  const [projects, setProjects] = React.useState([])

  useEffect(() => {
    axios.get('https://meenaback.herokuapp.com/project/')
  .then(res => {
      setProjects(res.data)
     console.log(res.data)
  })
  .catch(err => {
      console.log(err)
  })
   
  }, [])

   

    return (
        <div className="container text-center">
          <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        
          </Head>
        <div className="row">
          <div>
            { router.pathname === '/' ? projects.filter((project,index) => index < 3).map(project=> <Project key={project.id} name={project.name} desc={project.description} need={project.need} webter={project.web} gitnew={project.github} image={project.image} tags={project.tags}/> ) : projects.map(project => (
              <Project key={project.id} name={project.name} desc={project.description} need={project.need} webter={project.web} gitnew={project.github} image={project.image} tags={project.tags}/>
            )) }

          
       
        
        
       
          

      

        </div>
            
        </div>
        </div>
    )
}
