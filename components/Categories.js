import React from 'react'
import styles from '../styles/projects.module.scss'
import Head from 'next/head'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import { Category } from './Category'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export const Categories = () => {
    
    const [categories, setCategories] = React.useState([])

    useEffect(() => {
      axios.get('https://meenaback.herokuapp.com/category/')
    .then(res => {
        setCategories(res.data)
       console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
     
    }, [])
     
    

    
   

    return (
        <div className="container text-center">
        <div className="row">
          <div>

            {categories.map(category => (
                <Category key={category.id} name={category.name} color={category.color} image={category.image} description={category.description} web={category.web} />
            ))}
       
           
          

      

        </div>
            
        </div>
        </div>
    )
}
