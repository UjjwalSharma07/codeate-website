import React from 'react'
import style from '../../styles/course/Feature.module.css'
const Feature = () => {
  return (
    <div className={style.whole}>
      <div >
        <title>FEATURES</title>
        <div id='line'></div>
        <h5>What makes our courses special?</h5>
      </div>
      <div className={style.grid}>
        <div className={style.block}>
          <title>Structured Learning</title>
          <p>Learning made easy. Complete syllabus is covered while never compromising on quality.</p>
        </div>
        <div className={style.block}>
          <title>Notes</title>
          <p>
            Get complete notes for all lectures so that you can focus on learning and practising.
          </p>
        </div>
        <div className={style.block}>
          <title >Projects</title>
          <p>
            Learn by doing and apply your knowledge via projects and open source contributions.
          </p>
        </div>
        <div className={style.block}>
          <title>
            Certificate of completion
          </title>
          <p>
            Get Certificate on the successful completion of a course.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Feature