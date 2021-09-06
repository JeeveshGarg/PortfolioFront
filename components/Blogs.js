import React from 'react'
import styles from '../styles/blogs.module.scss'
import { faUser,faCalendar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

export const Blogs = () => {
   
    return (
        <div  className={styles.aboutussection} >
            
  <div  className={styles.blogcard}>
    <div  className={styles.meta}>
      <div  className={styles.photo} style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"}} ></div>
      <ul  className={styles.details}>
        <li  className={styles.author}><FontAwesomeIcon icon={faUser} style={{height: "13px", width:"13px", color: "#F2F2F2"}} /> John Doe</li>
        <li  className={styles.date}><FontAwesomeIcon icon={faCalendar} style={{height: "13px", width:"13px", color: "#F2F2F2"}} /> Aug. 24, 2015</li>
        
      </ul>
    </div>
    <div  className={styles.description}>
      <h1 style={{color:"#023047"}}>Learning to Code</h1>
     
      <p style={{color:"#6c757d"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className={styles.readmore}>
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  <div  className={styles.blogcard}>
    <div  className={styles.meta}>
      <div  className={styles.photo} style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"}} ></div>
      <ul  className={styles.details}>
        <li  className={styles.author}><FontAwesomeIcon icon={faUser} style={{height: "13px", width:"13px", color: "#F2F2F2"}} /> John Doe</li>
        <li  className={styles.date}><FontAwesomeIcon icon={faCalendar} style={{height: "13px", width:"13px", color: "#F2F2F2"}} /> Aug. 24, 2015</li>
        
      </ul>
    </div>
    <div  className={styles.description}>
      <h1 style={{color:"#023047"}}>Learning to Code</h1>
     
      <p style={{color:"#6c757d"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className={styles.readmore}>
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  <div  className={styles.blogcard}>
    <div  className={styles.meta}>
      <div  className={styles.photo} style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"}} ></div>
      <ul  className={styles.details}>
        <li  className={styles.author}><FontAwesomeIcon icon={faUser} style={{height: "13px", width:"13px", color: "#F2F2F2"}} /> John Doe</li>
        <li  className={styles.date}><FontAwesomeIcon icon={faCalendar} style={{height: "13px", width:"13px", color: "#F2F2F2"}} /> Aug. 24, 2015</li>
        
      </ul>
    </div>
    <div  className={styles.description}>
      <h1 style={{color:"#023047"}}>Learning to Code</h1>
   
      <p style={{color:"#6c757d"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className={styles.readmore}>
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
        </div>
    )
}
