import React from 'react'
import classes from "./HomeContent.module.css"
import homeContent from '../../../Content/Home/homeContent'
export default function HomeContent() {
  return (
    <div className={classes.content}>
        <h2 className={classes.headabout}>About...</h2>
        <p className={classes.contentpara}>{homeContent.main}</p>
        <p className={classes.contentpara}>{homeContent.sup}</p>
        <h3 className={classes.techHead}>Tech</h3>
        <section className={classes.techused}>
          
          {homeContent.tech.map((tech, index) => {
            return(
              <div key={index}>{tech}</div>
             
            )
          })}
        </section>
      </div>
  )
}
