import React from 'react'
import styles from '../styles/Timelapse.module.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

export const Timelapse = () => {
    return (
        <div  className={styles.aboutussection} >
        <div class="container">
            <div class="row">
                    <div className={styles.aboutus}>
                        <h4  className={styles.aboutustitle} style={{color:"#023047", fontWeight:"bolder"}}>Chapters of Life</h4>
                        
                        <div  className={styles.featurecontent}>
                                    <h5 style={{color:"#023047"}} style={{fontWeight:"normal"}}>Schooling And JEE Preparation</h5>
                                    <p style={{color:"#6c757d"}}>I grew up in Bhiwani, Haryana, and attended K. M. Public School (CBSE board), where I received a 94 percent in high school. I continued my education at K. M. Public School for 11th and 12th grades as well while also studying for the JEE exam. After that, I received a 90.5 percent in my 12th grade exams and passed both JEE Mains and JEE Advance.</p>
                                </div>
                                <div className={styles.featurecontent}>
                                    <h5 style={{color:"#023047"}} style={{fontWeight:"normal"}}>College</h5>
                                    <p style={{color:"#6c757d"}}>I am currently pursuing my Btech degree in Civil Engineering at IIT BHU, one of the most prestigious institution in India. Besides this, I am a technical writer,Web developer and a programmer too. I am also an active member of Club Of Programmers(COPs) of my college, which nurtures budding  developers in the campus and do much more than this.</p>
                                </div>
                                <div  className={styles.featurecontent}>
                                    <h5 style={{color:"#023047"}} style={{fontWeight:"normal"}}>Life Ahead</h5>
                                    <p style={{color:"#6c757d"}}>Life's uncertain though but in this uncertainty i search for hope. Hope to become better as a person, as a Developer and a Citizen of my Country too. In all this foggy way i'll keep my aim to smile always.</p>
                                </div>
                    </div>
               
                
            </div>
        </div>
</div>
    )
}
