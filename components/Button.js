import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import Link from 'next/link'

export const Button = ({btn}) => {
    
    return (
        <div className="container text-center">
            <Link href= {""+btn} passHref={true} ><button type="button" className="btn btn-warning" style={{backgroundColor:"#023047", color:"#FB8500", border:"none", fontWeight:"bolder",marginBottom:"70px"}}>Show More</button></Link>

        
      </div>
    )
}
