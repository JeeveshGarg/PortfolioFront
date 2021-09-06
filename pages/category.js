import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { faCode,faLaptopCode, faBrain} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Timelapse } from '../components/Timelapse'
import { Blogs } from '../components/Blogs'
import {Button} from '../components/Button'
import {Categories} from '../components/Categories'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
// import '../node_modules/materialize-css/dist/js/materialize.min.js'

const category = () => {
  return (
    <div class="text-center">
      
       <div class="container ">
       <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title_all text-center">
                            <h4 class="font-weight-bold" style={{marginTop:"10vh"}}>Categories I Have Experience</h4>
                            
                            <div class="">
                                <i class=""></i>
                            </div>
                        </div>
                    </div>
                </div>

         
                 </div>
                <Categories></Categories>
    </div>
  )
}

export default category
