import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { faCode,faLaptopCode, faBrain} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Timelapse } from '../components/Timelapse'
import { Blogs } from '../components/Blogs'
import {Button} from '../components/Button'
import {Projects} from '../components/Projects'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
// import '../node_modules/materialize-css/dist/js/materialize.min.js'

export default function Home() {
  return (
    <div >
      
     
      <section className= {`bg-light ${styles.section_all}`} id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title_all text-center">
                            <h4 className="font-weight-bold" style={{marginTop:"10vh"}}>Hi, Welcome To <span className="text-custom">My Website</span></h4>
                            
                            <div className="">
                                <i className=""></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row vertical_content_manage mt-5">
                    <div className="col-lg-6">
                        <div className={`mt-3 ${styles.about_header_main}`}>
                            <div className="about_icon_box">
                                <p style={{color: "#FB8500", fontWeight:"bolder"}}>HI THERE !</p>
                            </div>
                            <h5 className={`text-capitalize font-weight-bold mt-4 ${styles.about_heading}`} style={{ fontWeight:"bolder"}} >I AM JEEVESH GARG</h5>
                            <p className="text-muted mt-3">A undergraduate at IIT BHU, Varanasi. I have experience in building full-stack web applications. I love exploring new tech and have worked with various technologies and languages. I love contributing to the open source community whether be it contributing to open source software or building something that can be used by other developers. </p>

                            <p className="text-muted mt-3">Feel free to reach me out on the social media platforms mentioned at the bottom of this site. The quickest way to contact me is through Email. I hope you enjoy reading about my projects. 😃</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img_about mt-3">
                            <img src="/jeevesh.jpeg" alt="" className="img-fluid mx-auto d-block" style={{height:"220px", width:"220px", marginTop: "9vh", borderRadius:"50%"}}></img>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-4">
                        <div className={`mt-3 ${styles.about_content_box_all}`}>
                            <div className="about_detail text-center">
                                <div className={styles.about_icon} >
                                
                                <FontAwesomeIcon icon={faCode} style={{height: "65px", width:"65px", color: "#FB8500"}} />
                                </div>
                                <h6 className="text-dark text-capitalize mt-3 font-weight-bold">Full Stack Web developer</h6>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                    <div className={`mt-3 ${styles.about_content_box_all}`}>
                            <div className="about_detail text-center">
                                <div className={styles.about_icon}>
                                <FontAwesomeIcon icon={faLaptopCode} style={{height: "65px", width:"65px", color: "#FB8500"}} />
                                </div>
                                <h6 className="text-dark text-capitalize mt-3 font-weight-bold">Tech enthusiast</h6>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                    <div className={`mt-3 ${styles.about_content_box_all}`}>
                            <div className="about_detail text-center">
                                <div className={styles.about_icon}>
                                <FontAwesomeIcon icon={faBrain} style={{height: "65px", width:"65px", color: "#FB8500"}}/>
                                </div>
                                <h6 className="text-dark text-capitalize mt-3 font-weight-bold">Programmer</h6>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
     <Timelapse></Timelapse>
     
     <div className="text-center">
     <h5  className={styles.aboutustitle} style={{color:"#023047", fontWeight:"bolder"}}>Latest Blogs</h5>
     </div>

     <Blogs></Blogs>
     <Button></Button>

     <div className="text-center">
     <h5  className={styles.aboutustitle} style={{color:"#023047", fontWeight:"bolder"}}>Latest Projects</h5>
     </div>

     <Projects></Projects>
     <Button btn={"/projects"}></Button>
      
    </div>
  )
}
