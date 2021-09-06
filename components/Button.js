import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import Link from 'next/link'

export const Button = ({btn}) => {
    
    return (
        <div class="container text-center">
            <Link href= {""+btn} ><button type="button" class="btn btn-warning" style={{backgroundColor:"#023047", color:"#FB8500", border:"none", fontWeight:"bolder",marginBottom:"70px"}}>Show More</button></Link>

        
      </div>
    )
}
