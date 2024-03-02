import React from 'react'
import Communities from '../../components/portfolio/Communities'
import Companies from '../../components/portfolio/Companies'
import Milestones from '../../components/portfolio/Milestones'
import Partners from '../../components/portfolio/Partners'


function Portfolio() {
  return (
    <div>
        <Milestones/>
        <Partners/>
        <Communities/>
        <Companies/>
    </div>
  )
}

export default Portfolio